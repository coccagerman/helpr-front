import Modal from 'react-bootstrap/Modal'

export default function InterestsRecordModal({showInterestsRecordModal, setShowInterestsRecordModal, modalType}) {
    return (
        <div className='interestsRecordModal'>
            <Modal show={showInterestsRecordModal} onHide={() => setShowInterestsRecordModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => setShowInterestsRecordModal(false)}>Cancelar</button>
                    <button className="btn btn-primary" onClick={() => setShowInterestsRecordModal(false)}>Guardar</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}