import Modal from 'react-bootstrap/Modal'
import { useContext } from 'react'
import ProfileContext from '../../../../../../context/ProfileContext'

export default function DeleteEducationRecordModal({showDeleteEducationRecordModal, setShowDeleteEducationRecordModal, record}) {

    const { editEducationOrExperienceRecord } = useContext(ProfileContext)

    return (
        <div className='educationRecordModal'>
            <Modal show={showDeleteEducationRecordModal} onHide={() => setShowDeleteEducationRecordModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar registro de educación.</Modal.Title>
                </Modal.Header>
                <Modal.Body>Quiere eliminar este registro? No podrá recuperarlo luego.</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => setShowDeleteEducationRecordModal(false)}>Cancelar</button>
                    <button className="btn btn-red" onClick={() => {
                            editEducationOrExperienceRecord('education', 'delete', {
                                recordId: record._id
                            })
                            setShowDeleteEducationRecordModal(false)
                        }}>Eliminar</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}