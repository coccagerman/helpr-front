import { useContext } from 'react'
import ProfileContext from '../../../context/ProfileContext'
import Modal from 'react-bootstrap/Modal'

export default function ProfilePictureErrorModal({setShowProfilePictureModal}) {

    const { showProfilePictureErrorModal, setShowProfilePictureErrorModal } = useContext(ProfileContext)

    return (
        <div className='profilePictureModal'>
            <Modal show={showProfilePictureErrorModal} onHide={() => setShowProfilePictureErrorModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Error al editar foto de perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Ocurrió un error al editar tu imagen de perfil, por favor intentalo de nuevo.</p>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-secondary' type='button' onClick={() => setShowProfilePictureErrorModal(false)}>Cancelar</button>

                    <button className='btn btn-primary' type='submit' onClick={() => {
                        setShowProfilePictureErrorModal(false)
                        setShowProfilePictureModal(true)
                    }}>Reintentar</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}