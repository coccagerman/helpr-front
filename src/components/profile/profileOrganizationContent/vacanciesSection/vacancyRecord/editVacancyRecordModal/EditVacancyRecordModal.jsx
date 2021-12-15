import Modal from 'react-bootstrap/Modal'
import { useContext, useState } from 'react'
import ProfileContext from '../../../../../../context/ProfileContext'

export default function EditVacancyRecordModal({showEditVacancyRecordModal, setShowEditVacancyRecordModal, record}) {

    const { editVacanciesRecord } = useContext(ProfileContext)

    const [position, setPosition] = useState(record.position)
    const [beginDate, setBeginDate] = useState(record.beginDate)
    const [endDate, setEndDate] = useState(record.endDate)
    const [classification, setClassification] = useState(record.classification)
    const [detail, setDetail] = useState(record.detail)
    const [requisites, setRequisites] = useState(record.requisites)

    const cancelUnsavedChanges = () => {
        setPosition(record.position)
        setBeginDate(new Date(record.beginDate).toISOString().slice(0, 10))
        setEndDate(new Date(record.endDate).toISOString().slice(0, 10))
        setClassification(record.classification)
        setDetail(record.detail)
        setRequisites(record.requisites)
    }

    return (
        <Modal show={showEditVacancyRecordModal} className='editVacancyRecordModal' onHide={() => {
            cancelUnsavedChanges()
            setShowEditVacancyRecordModal(false)
        }}>
            <Modal.Header closeButton>
                <Modal.Title>Editar registro de educación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>

                    <div className='input-container'>
                        <label htmlFor='position'>Posición</label>
                        <input type='text' name='position' defaultValue={position} required onChange={e => setPosition(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='beginDate'>Fecha de inicio</label>
                        <input type='date' name='beginDate' defaultValue={beginDate} required onChange={e => setBeginDate(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='endDate'>Fecha fin</label>
                        <input type='date' name='endDate' defaultValue={endDate} required onChange={e => setEndDate(e.target.value)}/>
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
                        <textarea rows="5" cols="50" type='text' name='detail' defaultValue={detail} required onChange={e => setDetail(e.target.value)} />
                    </div>

                    <div className='input-container'>
                        <label htmlFor='requisites'>Requisitos</label>
                        <textarea rows="5" cols="50" type='text' name='requisites' defaultValue={requisites} required onChange={e => setRequisites(e.target.value)} />
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={() => {
                    cancelUnsavedChanges()
                    setShowEditVacancyRecordModal(false)
                }}>Cancelar</button>
                <button className='btn btn-primary' onClick={() => {
                    editVacanciesRecord('vacancies', 'edit', {
                        recordId: record._id,
                        position,
                        beginDate,
                        endDate,
                        classification,
                        detail,
                        requisites
                    })
                    setShowEditVacancyRecordModal(false)
                }}>Guardar</button>                
            </Modal.Footer>
        </Modal>
    )
}