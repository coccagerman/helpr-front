import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

export default function NewEducationRecordModal({showNewEducationRecordModal, setShowNewEducationRecordModal, addNewEducationRecord}) {

    const [institution, setInstitution] = useState(null)
    const [title, setTitle] = useState(null)
    const [beginDate, setBeginDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [clasification, setClasification] = useState('Ciencias sociales')
    const [state, setState] = useState('Completo')

    return (
        <Modal show={showNewEducationRecordModal} onHide={() => setShowNewEducationRecordModal(false)} className='newEducationRecordModal'>
            <Modal.Header closeButton>
                <Modal.Title>Nuevo registro de educación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action='' method='post'>

                    <div className='input-container'>
                        <label htmlFor='institution'>Institución</label>
                        <input type='text' name='institution' onChange={e => setInstitution(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='title'>Título</label>
                        <input type='text' name='title' onChange={e => setTitle(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='beginDate'>Fecha de inicio</label>
                        <input type='date' name='beginDate' onChange={e => setBeginDate(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='endDate'>Fecha fin</label>
                        <input type='date' name='endDate' onChange={e => setEndDate(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='clasification'>Clasificación</label>
                        <select name='clasification' onChange={e => setClasification(e.target.value)}>
                            <option value='Ciencias sociales'>Ciencias sociales</option>
                            <option value='Ciencias exactas'>Ciencias exactas</option>
                            <option value='Ciencias naturales'>Ciencias naturales</option>
                            <option value='Ciencias económicas'>Ciencias económicas</option>
                            <option value='Otro'>Otro</option>
                        </select>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='state'>Estado</label>
                        <select name='state' onChange={e => setState(e.target.value)}>
                            <option value='Completo'>Completo</option>
                            <option value='Abandonado'>Abandonado</option>
                            <option value='En curso'>En curso</option>
                        </select>
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={() => setShowNewEducationRecordModal(false)}>Cancelar</button>
                <button className='btn btn-primary' onClick={() => {
                        addNewEducationRecord({
                            institution,
                            title,
                            beginDate,
                            endDate,
                            clasification,
                            state
                        })
                        setShowNewEducationRecordModal(false)
                    }
                }>Guardar</button>

            </Modal.Footer>
        </Modal>
    )
}