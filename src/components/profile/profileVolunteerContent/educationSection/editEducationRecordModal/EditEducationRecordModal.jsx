import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

export default function NewEducationRecordModal({showEditEducationRecordModal, setShowEditEducationRecordModal, record}) {

    const [institution, setInstitution] = useState(record.institution)
    const [title, setTitle] = useState(record.title)
    const [beginDate, setBeginDate] = useState(record.beginDate)
    const [endDate, setEndDate] = useState(record.endDate)
    const [clasification, setClasification] = useState(record.clasification)
    const [state, setState] = useState(record.state)

    return (
        <Modal show={showEditEducationRecordModal} onHide={() => setShowEditEducationRecordModal(false)} className='editEducationRecordModal'>
            <Modal.Header closeButton>
                <Modal.Title>Editar registro de educación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action='' method='post'>

                        <div className='input-container'>
                            <label htmlFor='institution'>Institución</label>
                            <input type='text' name='institution' defaultValue={institution} onChange={e => setInstitution(e.target.value)}/>
                        </div>

                        <div className='input-container'>
                            <label htmlFor='title'>Título</label>
                            <input type='text' name='title' defaultValue={title} onChange={e => setTitle(e.target.value)}/>
                        </div>

                        <div className='input-container'>
                            <label htmlFor='beginDate'>Fecha de inicio</label>
                            <input type='date' name='beginDate' defaultValue={beginDate} onChange={e => setBeginDate(e.target.value)}/>
                        </div>

                        <div className='input-container'>
                            <label htmlFor='endDate'>Fecha fin</label>
                            <input type='date' name='endDate' defaultValue={endDate} onChange={e => setEndDate(e.target.value)}/>
                        </div>

                        <div className='input-container'>
                            <label htmlFor='clasification'>Clasificación</label>
                            <select name='clasification' defaultValue={clasification} onChange={e => setClasification(e.target.value)}>
                                <option value='Ciencias sociales'>Ciencias sociales</option>
                                <option value='Ciencias exactas'>Ciencias exactas</option>
                                <option value='Ciencias naturales'>Ciencias naturales</option>
                                <option value='Ciencias económicas'>Ciencias económicas</option>
                                <option value='Otro'>Otro</option>
                            </select>
                        </div>

                        <div className='input-container'>
                            <label htmlFor='state'>Estado</label>
                            <select name='state' defaultValue={state} onChange={e => setState(e.target.value)}>
                                <option value='Completo'>Completo</option>
                                <option value='Abandonado'>Abandonado</option>
                                <option value='En curso'>En curso</option>
                            </select>
                        </div>

                    </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={() => setShowEditEducationRecordModal(false)}>Cancelar</button>
                <button className='btn btn-primary' onClick={() => {
                        record.institution = institution
                        record.title = title
                        record.beginDate = beginDate
                        record.endDate = endDate
                        record.clasification = clasification
                        record.state = state
                        setShowEditEducationRecordModal(false)
                    }
                }>Guardar</button>                
            </Modal.Footer>
        </Modal>
    )
}