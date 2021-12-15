import Modal from 'react-bootstrap/Modal'
import { useContext, useState } from 'react'
import ProfileContext from '../../../context/ProfileContext'

import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'

import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImageCrop, FilePondPluginImageTransform, FilePondPluginFileEncode)

export default function ProfilePictureModal({showProfilePictureModal, setShowProfilePictureModal}) {

    const { editProfilePicture } = useContext(ProfileContext)
    const [profilePicture, setProfilePicture] = useState([])

    return (
        <div className='profilePictureModal'>
            <Modal show={showProfilePictureModal} onHide={() => {
                    setProfilePicture([])
                    setShowProfilePictureModal(false)
                }}>
                <Modal.Header closeButton>
                    <Modal.Title>Edita tu foto de perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <p>Asegurate de subir una imagen jpg, jpeg, png o gif, con un peso máximo de 2mb.</p>

                <FilePond
                    files={profilePicture}
                    onupdatefiles={setProfilePicture}
                    allowMultiple={false}
                    dropOnPage
                    name='profilePicture'
                    labelIdle='Arrastrá tu imagen o <span class="filepond--label-action">explorá tus archivos.</span>'
                    allowImageExifOrientation={true}
                    allowImageCrop={true}
                    imageCropAspectRatio='1:1'
                    allowImageTransform={true}
                />
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-secondary' type='button' onClick={() => {
                        setProfilePicture([])
                        setShowProfilePictureModal(false)
                    }}>Cancelar</button>

                    <button className='btn btn-primary' type='submit' onClick={() => {
                        if (profilePicture) {
                        editProfilePicture({
                            FileEncodeBase64String: profilePicture[0].getFileEncodeBase64String(),
                            fileType: profilePicture[0].fileType,
                            fileSize: profilePicture[0].fileSize
                        })
                        setShowProfilePictureModal(false)
                    }}}>Guardar</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}