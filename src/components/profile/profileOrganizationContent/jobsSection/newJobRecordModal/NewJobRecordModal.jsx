import Modal from 'react-bootstrap/Modal'
import { useContext, useState } from 'react'
import ProfileContext from '../../../../../context/ProfileContext'

export default function NewJobRecordModal({showNewJobRecordModal, setShowNewJobRecordModal}) {

    const { editJobsRecord } = useContext(ProfileContext)

    const [position, setPosition] = useState(null)
    const [beginDate, setBeginDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [classification, setClassification] = useState('Desarrollo de software')
    const [detail, setDetail] = useState(null)
    const [requisites, setRequisites] = useState(null)
    
    const cancelUnsavedChanges = () => {
        setPosition(null)
        setBeginDate(null)
        setEndDate(null)
        setClassification('Desarrollo de software')
        setDetail(null)
        setRequisites(null)
    }

    const todayDate = Date.now()
    const todayDateFormated = new Date(todayDate).toISOString().slice(0, 10)
    const tomorrow = new Date(todayDate)
    const tomorrowDate = new Date(tomorrow).setDate(tomorrow.getDate() + 1)
    const tomorrowDateFormated = new Date(tomorrowDate).toISOString().slice(0, 10)
    const dayAfterBeginDate = new Date(beginDate)
    const dayAfterBeginDateDate = new Date(dayAfterBeginDate).setDate(dayAfterBeginDate.getDate() + 1)
    const dayAfterBeginDateDateFormated = new Date(dayAfterBeginDateDate).toISOString().slice(0, 10)
    const dayBeforeEndDate = new Date(endDate)
    const dayBeforeEndDateDate = new Date(dayBeforeEndDate).setDate(dayBeforeEndDate.getDate() - 1)
    const dayBeforeEndDateDateFormated = new Date(dayBeforeEndDateDate).toISOString().slice(0, 10)

    return (
        <Modal show={showNewJobRecordModal} onHide={() => setShowNewJobRecordModal(false)} className='newJobRecordModal'>
            <Modal.Header closeButton>
                <Modal.Title>Nueva vacante disponible</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Por favor completá todos los campos.</p>

                <form>

                    <div className='input-container'>
                        <label htmlFor='position'>Posición</label>
                        <input type='text' name='position' maxLength='80' required onChange={e => setPosition(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='beginDate'>Fecha de inicio del proyecto</label>
                        <input type='date' name='beginDate' required min={todayDateFormated} max={endDate ? dayBeforeEndDateDateFormated : null} onChange={e => setBeginDate(e.target.value)}/>
                    </div>
                    
                    <div className='input-container'>
                        <label htmlFor='endDate'>Fecha fin  del proyecto</label>
                        <input type='date' name='endDate' required min={beginDate ? dayAfterBeginDateDateFormated : tomorrowDateFormated} onChange={e => setEndDate(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='classification'>Clasificación</label>
                        <select name='classification' required onChange={e => setClassification(e.target.value)}>
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
                        <textarea rows="5" cols="50" type='text' name='detail' maxLength='1000' required onChange={e => setDetail(e.target.value)} />
                    </div>

                    <div className='input-container'>
                        <label htmlFor='requisites'>Requisitos</label>
                        <textarea rows="5" cols="50" type='text' name='requisites' maxLength='1000' required onChange={e => setRequisites(e.target.value)} />
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={() => {
                    cancelUnsavedChanges()
                    setShowNewJobRecordModal(false)
                }}>Cancelar</button>
                <button className='btn btn-primary' onClick={() => {
                    if (position && beginDate && endDate && classification && detail && requisites && endDate > beginDate) {
                        editJobsRecord('jobs', 'add', {
                            position,
                            beginDate,
                            endDate,
                            classification,
                            detail,
                            requisites
                        })
                        setShowNewJobRecordModal(false)
                }}}>Guardar</button>
            </Modal.Footer>
        </Modal>
    )
}