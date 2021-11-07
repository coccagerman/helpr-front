import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

export default function EditVacancyRecordModal({showEditVacancyRecordModal, setShowEditVacancyRecordModal, record}) {

    const [position, setPosition] = useState(record.position)
    const [beginDate, setBeginDate] = useState(record.beginDate)
    const [endDate, setEndDate] = useState(record.endDate)
    const [clasification, setClasification] = useState(record.clasification)
    const [detail, setDetail] = useState(record.detail)
    const [requisites, setRequisites] = useState(record.requisites)

    return (
        <Modal show={showEditVacancyRecordModal} onHide={() => setShowEditVacancyRecordModal(false)} className='editVacancyRecordModal'>
            <Modal.Header closeButton>
                <Modal.Title>Editar registro de educación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action='' method='post'>

                        <div className='input-container'>
                            <label htmlFor='position'>Posición</label>
                            <input type='text' name='position' defaultValue={position} required onChange={e => setPosition(e.target.value)}/>
                        </div>

                        <div className='input-container'>
                            <label htmlFor='beginDate'>Fecha de inicio</label>
                            <input type='date' name='beginDate' value={beginDate} required onChange={e => setBeginDate(e.target.value)}/>
                        </div>

                        <div className='input-container'>
                            <label htmlFor='endDate'>Fecha fin</label>
                            <input type='date' name='endDate' defaultValue={endDate} required onChange={e => setEndDate(e.target.value)}/>
                        </div>

                        <div className='input-container'>
                            <label htmlFor='clasification'>Clasificación</label>
                            <select name='clasification' defaultValue={clasification} required onChange={e => setClasification(e.target.value)}>
                                <option value='Desarrollo de software'>Desarrollo de software</option>
                                <option value='Diseño e ilustración'>Diseño e ilustración</option>
                                <option value='Educación'>Educación</option>
                                <option value='Redacción de contenido y traducción'>Redacción de contenido y traducción</option>
                                <option value='Edición de audio y video'>Edición de audio y video</option>
                                <option value='Marketing'>Marketing</option>
                                <option value='Análisis y presentación de datos'>Análisis y presentación de datos</option>
                                <option value='Otro'>Otro</option>
                            </select>
                        </div>

                        <div className='input-container'>
                            <label htmlFor='detail'>Detalle de tareas</label>
                            <textarea rows="5" cols="50" type='text' name='detail' defaultValue={detail} required onChange={e => setDetail(e.target.value)} />
                        </div>

                        <div className='input-container'>
                            <label htmlFor='requisites'>Requisitos</label>
                            <textarea rows="5" cols="50" type='text' name='requisites' defaultValue={requisites} required onChange={e => setRequisites(e.target.value)} />
                        </div>

                    </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={() => setShowEditVacancyRecordModal(false)}>Cancelar</button>
                <button className='btn btn-primary' onClick={() => {
                        record.position = position
                        record.beginDate = beginDate
                        record.endDate = endDate
                        record.clasification = clasification
                        record.detail = detail
                        record.requisites = requisites
                        setShowEditVacancyRecordModal(false)
                    }
                }>Guardar</button>                
            </Modal.Footer>
        </Modal>
    )
}