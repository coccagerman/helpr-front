import Modal from 'react-bootstrap/Modal'
import { useContext } from 'react'
import ProfileContext from '../../../../../../context/ProfileContext'

export default function DeleteVacancyRecordModal({showDeleteVacancyRecordModal, setShowDeleteVacancyRecordModal, record}) {
    
    const { editVacanciesRecord } = useContext(ProfileContext)
    
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
                        editVacanciesRecord('vacancies', 'delete', {
                            recordId: record._id
                        })
                        setShowDeleteVacancyRecordModal(false)
                    }}>Eliminar</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}