import Modal from 'react-bootstrap/Modal'
import { useContext } from 'react'
import ProfileContext from '../../../../../../context/ProfileContext'

export default function DeleteExperienceRecordModal({showDeleteExperienceRecordModal, setShowDeleteExperienceRecordModal, record}) {

    const { editEducationOrExperienceRecord } = useContext(ProfileContext)

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
                        editEducationOrExperienceRecord('experience', 'delete', {
                            recordId: record._id
                        })
                        setShowDeleteExperienceRecordModal(false)
                    }}>Eliminar</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}