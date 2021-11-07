import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

export default function NewInterestRecordModal({showNewInterestRecordModal, setShowNewInterestRecordModal, addNewInterestRecord}) {

    const [interest, setInterest] = useState(null)

    return (
        <Modal show={showNewInterestRecordModal} onHide={() => setShowNewInterestRecordModal(false)} className='newInterestRecordModal'>
            <Modal.Header closeButton>
                <Modal.Title>Añadir nuevo registro de interés</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action='' method='post'>

                    <div className='input-container'>
                        <label htmlFor='Interest'>Interés</label>
                        <input type='text' name='Interest' onChange={e => setInterest(e.target.value)}/>
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={() => setShowNewInterestRecordModal(false)}>Cancelar</button>
                <button className="btn btn-primary" onClick={() => {
                        addNewInterestRecord(interest)
                        setShowNewInterestRecordModal(false)
                    }}>Guardar</button>
            </Modal.Footer>
        </Modal>
    )
}