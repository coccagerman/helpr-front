import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

export default function NewVacancyRecordModal({showNewVacancyRecordModal, setShowNewVacancyRecordModal, addNewVacancyRecord}) {

    const [position, setPosition] = useState(null)
    const [beginDate, setBeginDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [clasification, setClasification] = useState('Ciencias sociales')
    const [detail, setDetail] = useState(null)
    const [requisites, setRequisites] = useState(null)
    
    return (
        <Modal show={showNewVacancyRecordModal} onHide={() => setShowNewVacancyRecordModal(false)} className='newVacancyRecordModal'>
            <Modal.Header closeButton>
                <Modal.Title>Nuevo vacante disponible</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action='' method='post'>

                    <div className='input-container'>
                        <label htmlFor='position'>Posición</label>
                        <input type='text' name='position' onChange={e => setPosition(e.target.value)}/>
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
                        <textarea rows="5" cols="50" type='text' name='detail' onChange={e => setDetail(e.target.value)} />
                    </div>

                    <div className='input-container'>
                        <label htmlFor='requisites'>Requisitos</label>
                        <textarea rows="5" cols="50" type='text' name='requisites' onChange={e => setRequisites(e.target.value)} />
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={() => setShowNewVacancyRecordModal(false)}>Cancelar</button>
                <button className='btn btn-primary' onClick={() => {
                        addNewVacancyRecord({
                            position,
                            beginDate,
                            endDate,
                            clasification,
                            detail,
                            requisites
                        })
                        setShowNewVacancyRecordModal(false)
                    }
                }>Guardar</button>

            </Modal.Footer>
        </Modal>
    )
}