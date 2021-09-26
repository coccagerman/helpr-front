import Modal from 'react-bootstrap/Modal'

export default function EducationRecordModal({showEducationRecordModal, setShowEducationRecordModal, modalType}) {
    return (
        <div className='educationRecordModal'>
            <Modal show={showEducationRecordModal} onHide={() => setShowEducationRecordModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => setShowEducationRecordModal(false)}>Cancelar</button>
                    <button className="btn btn-primary" onClick={() => setShowEducationRecordModal(false)}>Guardar</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}