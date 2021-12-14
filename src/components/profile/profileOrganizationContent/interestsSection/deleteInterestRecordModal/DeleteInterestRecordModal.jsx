import Modal from 'react-bootstrap/Modal'
import { useContext } from 'react'
import ProfileContext from '../../../../../context/ProfileContext'

export default function DeleteInterestRecordModal({showDeleteInterestRecordModal, setShowDeleteInterestRecordModal, record}) {

    const { editUserRecord } = useContext(ProfileContext)

    return (
        <div className='interestRecordModal'>
            <Modal show={showDeleteInterestRecordModal} onHide={() => setShowDeleteInterestRecordModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar registro de interés.</Modal.Title>
                </Modal.Header>
                <Modal.Body>Quiere eliminar este registro? No podrá recuperarlo luego.</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => setShowDeleteInterestRecordModal(false)}>Cancelar</button>
                    <button className="btn btn-red" onClick={() => {
                        editUserRecord('interests', record, 'delete')
                        setShowDeleteInterestRecordModal(false)
                    }}>Eliminar</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}