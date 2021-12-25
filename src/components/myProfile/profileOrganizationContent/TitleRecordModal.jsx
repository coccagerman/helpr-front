import Modal from 'react-bootstrap/Modal'
import { useContext, useState } from 'react'
import ProfileContext from '../../../context/ProfileContext'

export default function TitleRecordModal({showTitleRecordModal, setShowTitleRecordModal}) {

    const { editUserRecord, profileData } = useContext(ProfileContext)
    const [title, setTitle] = useState(profileData.title)

    /* Temporary fix - Styles on CSS files not rendering on this field */
    const inputStyle = {
        width: '100%',
        margin: '1rem 0',
        padding: '.25rem'
    }

    return (
        <div className='titleRecordModal-organization'>
            <Modal show={showTitleRecordModal} onHide={() => {
                    setTitle(profileData.title)
                    setShowTitleRecordModal(false)
                }}>
                <Modal.Header closeButton>
                    <Modal.Title>Edita tu titular</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='input-container'>
                            <label htmlFor='about'>El titular aparecerá en tu perfil debajo de tu nombre. Aprovecha este espacio para presentarte brevemente como organización o persona. Por ejemplo: "Agencia de marketing digital" o "Ingeniero de software".</label>
                            <input type='text' className='textarea' name='about' defaultValue={profileData.title} style={inputStyle} maxLength='100' onChange={e => setTitle(e.target.value)}/>
                        </div>
                    </form>    
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-secondary' onClick={() => {
                        setTitle(profileData.title)
                        setShowTitleRecordModal(false)
                    }}>Cancelar</button>
                    <button className='btn btn-primary' onClick={() => {
                        editUserRecord('title', title)
                        setShowTitleRecordModal(false)
                    }}>Guardar</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}