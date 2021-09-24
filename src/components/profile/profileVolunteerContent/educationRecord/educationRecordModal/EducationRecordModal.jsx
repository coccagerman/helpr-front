import Modal from 'react-bootstrap/Modal'

export default function EducationRecordModal({showModal, setShowModal}) {
    return (
        <div className='educationRecordModal'>
            <Modal show={showModal} onHide={setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-secondary' onClick={setShowModal(false)}>Close</button>
                    <button className='btn btn-primary' onClick={setShowModal(false)}>Save Changes</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}