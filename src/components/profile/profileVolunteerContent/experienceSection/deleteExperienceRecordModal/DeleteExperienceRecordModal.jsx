import Modal from 'react-bootstrap/Modal'

export default function DeleteExperienceRecordModal({showDeleteExperienceRecordModal, setShowDeleteExperienceRecordModal, record, deleteExperienceRecord}) {
    return (
        <div className='experienceRecordModal'>
            <Modal show={showDeleteExperienceRecordModal} onHide={() => setShowDeleteExperienceRecordModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar registro de experiencia.</Modal.Title>
                </Modal.Header>
                <Modal.Body>Quiere eliminar este registro? No podrá recuperarlo luego.</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => setShowDeleteExperienceRecordModal(false)}>Cancelar</button>
                    <button className="btn btn-red" onClick={() => {
                            deleteExperienceRecord(record)
                            setShowDeleteExperienceRecordModal(false)
                        }}>Eliminar</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}