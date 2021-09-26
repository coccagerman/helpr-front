import Modal from 'react-bootstrap/Modal'

export default function ExperienceRecordModal({showExperienceRecordModal, setShowExperienceRecordModal, modalType}) {
    return (
        <div className='experienceRecordModal'>
            <Modal show={showExperienceRecordModal} onHide={() => setShowExperienceRecordModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => setShowExperienceRecordModal(false)}>Cancelar</button>
                    <button className="btn btn-primary" onClick={() => setShowExperienceRecordModal(false)}>Guardar</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}