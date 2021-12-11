import Modal from 'react-bootstrap/Modal'
import { useContext, useState } from 'react'
import ProfileContext from '../../../../../context/ProfileContext'

export default function AboutRecordModal({showAboutRecordModal, setShowAboutRecordModal}) {

    const { editUserRecord, profileData } = useContext(ProfileContext)

    const [about, setAbout] = useState(profileData.about)

    return (
        <Modal show={showAboutRecordModal} onHide={() => {
                setAbout(profileData.about)
                setShowAboutRecordModal(false)
            }} className='aboutRecordModal'>
            <Modal.Header closeButton>
                <Modal.Title>Sobre mí</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form >
                    <div className='input-container'>
                        <label htmlFor='about'>Contá sobre vos, tu historia, experiencias e intereses.</label>
                        <textarea className='textarea' name='about' rows='10' cols='50' defaultValue={profileData.about} onChange={e => setAbout(e.target.value)}/>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={() => {
                    setAbout(profileData.about)
                    setShowAboutRecordModal(false)
                }}>Cancelar</button>
                <button className='btn btn-primary' onClick={() => {
                    editUserRecord('about', about)
                    setShowAboutRecordModal(false)
                }}>Guardar</button>
            </Modal.Footer>
        </Modal>
    )
}