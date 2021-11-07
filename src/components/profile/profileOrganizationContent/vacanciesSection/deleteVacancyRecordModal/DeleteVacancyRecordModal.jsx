import Modal from 'react-bootstrap/Modal'

export default function DeleteVacancyRecordModal({showDeleteVacancyRecordModal, setShowDeleteVacancyRecordModal, record, deleteVacancyRecord}) {
    return (
        <div className='vacancyRecordModal'>
            <Modal show={showDeleteVacancyRecordModal} onHide={() => setShowDeleteVacancyRecordModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar registro de vacante.</Modal.Title>
                </Modal.Header>
                <Modal.Body>Quiere eliminar este registro? No podrá recuperarlo luego.</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => setShowDeleteVacancyRecordModal(false)}>Cancelar</button>
                    <button className="btn btn-red" onClick={() => {
                            deleteVacancyRecord(record)
                            setShowDeleteVacancyRecordModal(false)
                        }}>Eliminar</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}