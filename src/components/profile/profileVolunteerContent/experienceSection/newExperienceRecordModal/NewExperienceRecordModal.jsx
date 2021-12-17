import Modal from 'react-bootstrap/Modal'
import { useContext, useState } from 'react'
import ProfileContext from '../../../../../context/ProfileContext'

export default function NewExperienceRecordModal({showNewExperienceRecordModal, setShowNewExperienceRecordModal}) {

    const { editEducationOrExperienceRecord } = useContext(ProfileContext)

    const [position, setPosition] = useState(null)
    const [company, setCompany] = useState(null)
    const [beginDate, setBeginDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [description, setDescription] = useState(null)

    const cancelUnsavedChanges = () => {
        setPosition(null)
        setCompany(null)
        setBeginDate(null)
        setEndDate(null)
        setDescription(null)
    }

    const todayDate = Date.now()
    const todayDateFormated = new Date(todayDate).toISOString().slice(0, 10)
    const dayAfterBeginDate = new Date(beginDate)
    const dayAfterBeginDateDate = new Date(dayAfterBeginDate).setDate(dayAfterBeginDate.getDate() + 1)
    const dayAfterBeginDateDateFormated = new Date(dayAfterBeginDateDate).toISOString().slice(0, 10)
    const dayBeforeEndDate = new Date(endDate)
    const dayBeforeEndDateDate = new Date(dayBeforeEndDate).setDate(dayBeforeEndDate.getDate() - 1)
    const dayBeforeEndDateDateFormated = new Date(dayBeforeEndDateDate).toISOString().slice(0, 10)

    return (
        <Modal show={showNewExperienceRecordModal} className='newExperienceRecordModal' onHide={() => {
            cancelUnsavedChanges()
            setShowNewExperienceRecordModal(false)
        }}>
            <Modal.Header closeButton>
                <Modal.Title>Nuevo registro de experiencia</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Por favor completá todos los campos.</p>
                
                <form>

                    <div className='input-container'>
                        <label htmlFor='position'>Posición</label>
                        <input type='text' name='position' maxLength='100' required onChange={e => setPosition(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='company'>Empresa</label>
                        <input type='text' name='company' maxLength='100' required onChange={e => setCompany(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='beginDate'>Fecha de inicio</label>
                        <input type='date' name='beginDate' max={endDate ? dayBeforeEndDateDateFormated : todayDateFormated} required onChange={e => setBeginDate(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='endDate'>Fecha fin</label>
                        <input type='date' name='endDate' min={beginDate ? dayAfterBeginDateDateFormated : null} required onChange={e => setEndDate(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='description'>Descripción</label>
                        <input type='text' name='description' maxLength='2000' required onChange={e => setDescription(e.target.value)}/>
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={() => {
                    cancelUnsavedChanges()
                    setShowNewExperienceRecordModal(false)
                }}>Cancelar</button>
                <button className='btn btn-primary' onClick={() => {
                    if (position && company && beginDate && endDate && description && endDate > beginDate){
                        editEducationOrExperienceRecord('experience', 'add', {
                            position,
                            company,
                            beginDate,
                            endDate,
                            description
                        })
                        setShowNewExperienceRecordModal(false)
                }}}>Guardar</button>
            </Modal.Footer>
        </Modal>
    )
}