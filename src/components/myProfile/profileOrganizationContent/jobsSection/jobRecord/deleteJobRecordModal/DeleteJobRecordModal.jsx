import Modal from 'react-bootstrap/Modal'
import { useContext } from 'react'
import ProfileContext from '../../../../../../context/ProfileContext'

export default function DeleteJobRecordModal({showDeleteJobRecordModal, setShowDeleteJobRecordModal, record}) {
    
    const { editJobsRecord } = useContext(ProfileContext)
    
    return (
        <div className='jobRecordModal'>
            <Modal show={showDeleteJobRecordModal} onHide={() => setShowDeleteJobRecordModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar registro de vacante.</Modal.Title>
                </Modal.Header>
                <Modal.Body>Quiere eliminar este registro? No podrá recuperarlo luego.</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => setShowDeleteJobRecordModal(false)}>Cancelar</button>
                    <button className="btn btn-red" onClick={() => {
                        editJobsRecord('jobs', 'delete', {
                            recordId: record._id
                        })
                        setShowDeleteJobRecordModal(false)
                    }}>Eliminar</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}