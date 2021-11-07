import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

export default function AboutRecordModal({showAboutRecordModal, setShowAboutRecordModal, AboutRecord, setAboutRecord}) {

    const [about, setAbout] = useState(null)

    return (
        <Modal show={showAboutRecordModal} onHide={() => setShowAboutRecordModal(false)} className='aboutRecordModal'>
            <Modal.Header closeButton>
                <Modal.Title>Sobre mí</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action='' method='post'>

                    <div className='input-container'>
                        <label htmlFor='about'>Contá sobre tu organización, sus objetivos y las vacantes de voluntariado disponibles.</label>
                        <textarea className='textarea' name="about" rows="10" cols="50" defaultValue={AboutRecord} onChange={e => setAbout(e.target.value)}/>
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={() => setShowAboutRecordModal(false)}>Cancelar</button>
                <button className='btn btn-primary' onClick={() => {
                        setAboutRecord(about)
                        setShowAboutRecordModal(false)
                    }
                }>Guardar</button>
            </Modal.Footer>
        </Modal>
    )
}