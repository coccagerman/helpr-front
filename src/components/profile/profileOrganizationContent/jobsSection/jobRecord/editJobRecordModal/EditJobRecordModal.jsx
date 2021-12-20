import Modal from 'react-bootstrap/Modal'
import { useContext, useState } from 'react'
import ProfileContext from '../../../../../../context/ProfileContext'

export default function EditJobRecordModal({showEditJobRecordModal, setShowEditJobRecordModal, record}) {

    const { editJobsRecord } = useContext(ProfileContext)

    const [position, setPosition] = useState(record.position)
    const [hourDedication, setHourDedication] = useState(record.hourDedication)
    const [projectDuration, setProjectDuration] = useState(record.projectDuration)
    const [classification, setClassification] = useState(record.classification)
    const [detail, setDetail] = useState(record.detail)
    const [requisites, setRequisites] = useState(record.requisites)

    const cancelUnsavedChanges = () => {
        setPosition(record.position)
        setClassification(record.classification)
        setDetail(record.detail)
        setRequisites(record.requisites)
        setHourDedication(record.hourDedication)
        setProjectDuration(record.projectDuration)
    }

    return (
        <Modal show={showEditJobRecordModal} className='editJobRecordModal' onHide={() => {
            cancelUnsavedChanges()
            setShowEditJobRecordModal(false)
        }}>
            <Modal.Header closeButton>
                <Modal.Title>Editar registro de educación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Por favor completá todos los campos.</p>

                <form>

                    <div className='input-container'>
                        <label htmlFor='position'>Posición</label>
                        <input type='text' name='position' defaultValue={position} maxLength='80' required onChange={e => setPosition(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='hourDedication'>Dedicación horaria</label>
                        <select name='hourDedication' defaultValue={hourDedication} required onChange={e => setHourDedication(e.target.value)}>
                            <option value='Part time'>Part time</option>
                            <option value='Full time'>Full time</option>
                        </select>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='projectDuration'>Duración del proyecto</label>
                        <select name='projectDuration' defaultValue={projectDuration} required onChange={e => setProjectDuration(e.target.value)}>
                            <option value='Menos de 3 días'>Menos de 3 días</option>
                            <option value='De 4 a 10 días'>De 4 a 10 días</option>
                            <option value='De 11 a 20 días'>De 11 a 20 días</option>
                            <option value='De 21 a 3 meses'>De 21 a 3 meses</option>
                            <option value='Más de 3 meses'>Más de 3 meses</option>
                        </select>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='classification'>Clasificación</label>
                        <select name='classification' defaultValue={classification} required onChange={e => setClassification(e.target.value)}>
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
                        <textarea rows="5" cols="50" type='text' name='detail' defaultValue={detail} maxLength='1000' required onChange={e => setDetail(e.target.value)} />
                    </div>

                    <div className='input-container'>
                        <label htmlFor='requisites'>Requisitos</label>
                        <textarea rows="5" cols="50" type='text' name='requisites' defaultValue={requisites} maxLength='1000' required onChange={e => setRequisites(e.target.value)} />
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={() => {
                    cancelUnsavedChanges()
                    setShowEditJobRecordModal(false)
                }}>Cancelar</button>
                <button className='btn btn-primary' onClick={() => {
                    if (position && hourDedication && projectDuration && classification && detail && requisites) {
                        editJobsRecord('jobs', 'edit', {
                            recordId: record._id,
                            publishedDate: record.publishedDate,
                            position,
                            hourDedication,
                            projectDuration,
                            classification,
                            detail,
                            requisites
                        })
                        setShowEditJobRecordModal(false)
                }}}>Guardar</button>                
            </Modal.Footer>
        </Modal>
    )
}