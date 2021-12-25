import Modal from 'react-bootstrap/Modal'
import { useContext, useState } from 'react'
import ProfileContext from '../../../../../context/ProfileContext'

export default function NewJobRecordModal({showNewJobRecordModal, setShowNewJobRecordModal}) {

    const { editJobsRecord } = useContext(ProfileContext)

    const [position, setPosition] = useState(null)
    const [hourDedication, setHourDedication] = useState('Part time')
    const [projectDuration, setProjectDuration] = useState('Menos de 3 días')
    const [classification, setClassification] = useState('Desarrollo de software')
    const [detail, setDetail] = useState(null)
    const [requisites, setRequisites] = useState(null)
    
    const cancelUnsavedChanges = () => {
        setPosition(null)
        setHourDedication('Part time')
        setProjectDuration('Menos de 3 días')
        setClassification('Desarrollo de software')
        setDetail(null)
        setRequisites(null)
    }

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
                        <label htmlFor='hourDedication'>Dedicación horaria</label>
                        <select name='hourDedication' required onChange={e => setHourDedication(e.target.value)}>
                            <option value='Part time'>Part time</option>
                            <option value='Full time'>Full time</option>
                        </select>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='projectDuration'>Duración del proyecto</label>
                        <select name='projectDuration' required onChange={e => setProjectDuration(e.target.value)}>
                            <option value='Menos de 3 días'>Menos de 3 días</option>
                            <option value='De 4 a 10 días'>De 4 a 10 días</option>
                            <option value='De 11 a 20 días'>De 11 a 20 días</option>
                            <option value='De 21 días a 3 meses'>De 21 días a 3 meses</option>
                            <option value='Más de 3 meses'>Más de 3 meses</option>
                        </select>
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
                    if (position && hourDedication && projectDuration && classification && detail && requisites) {
                        editJobsRecord('jobs', 'add', {
                            publishedDate: Date.now(),
                            position,
                            hourDedication,
                            projectDuration,
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