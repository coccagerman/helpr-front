import Modal from 'react-bootstrap/Modal'

export default function RecommendationsRecordModal({showRecommendationsRecordModal, setShowRecommendationsRecordModal, modalType}) {
    return (
        <div className='recommendationsRecordModal'>
            <Modal show={showRecommendationsRecordModal} onHide={() => setShowRecommendationsRecordModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => setShowRecommendationsRecordModal(false)}>Cancelar</button>
                    <button className="btn btn-primary" onClick={() => setShowRecommendationsRecordModal(false)}>Guardar</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}