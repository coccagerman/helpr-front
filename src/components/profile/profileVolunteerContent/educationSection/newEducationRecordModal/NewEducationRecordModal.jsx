import Modal from 'react-bootstrap/Modal'
import { useContext, useState } from 'react'
import ProfileContext from '../../../../../context/ProfileContext'

export default function NewEducationRecordModal({showNewEducationRecordModal, setShowNewEducationRecordModal}) {

    const { editEducationOrExperienceRecord } = useContext(ProfileContext)

    const [institution, setInstitution] = useState(null)
    const [title, setTitle] = useState(null)
    const [beginDate, setBeginDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [classification, setClassification] = useState('Ciencias sociales')
    const [state, setState] = useState('Completo')

    const cancelUnsavedChanges = () => {
        setInstitution(null)
        setTitle(null)
        setBeginDate(null)
        setEndDate(null)
        setClassification('Ciencias sociales')
        setState('Completo')
    }

    const dayAfterBeginDate = new Date(beginDate)
    const dayAfterBeginDateDate = new Date(dayAfterBeginDate).setDate(dayAfterBeginDate.getDate() + 1)
    const dayAfterBeginDateDateFormated = new Date(dayAfterBeginDateDate).toISOString().slice(0, 10)
    const dayBeforeEndDate = new Date(endDate)
    const dayBeforeEndDateDate = new Date(dayBeforeEndDate).setDate(dayBeforeEndDate.getDate() - 1)
    const dayBeforeEndDateDateFormated = new Date(dayBeforeEndDateDate).toISOString().slice(0, 10)

    return (
        <Modal show={showNewEducationRecordModal} className='newEducationRecordModal' onHide={() => {
            cancelUnsavedChanges()
            setShowNewEducationRecordModal(false)
        }}>
            <Modal.Header closeButton>
                <Modal.Title>Nuevo registro de educación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Por favor completá todos los campos.</p>

                <form>

                    <div className='input-container'>
                        <label htmlFor='institution'>Institución</label>
                        <input type='text' name='institution' maxlength='100' required onChange={e => setInstitution(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='title'>Título</label>
                        <input type='text' name='title' maxlength='100' required onChange={e => setTitle(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='beginDate'>Fecha de inicio</label>
                        <input type='date' name='beginDate' required max={endDate ? dayBeforeEndDateDateFormated : null} onChange={e => setBeginDate(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='endDate'>Fecha fin</label>
                        <input type='date' name='endDate' required min={beginDate ? dayAfterBeginDateDateFormated : null} onChange={e => setEndDate(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='classification'>Clasificación</label>
                        <select name='classification' required onChange={e => setClassification(e.target.value)}>
                            <option value='Ciencias sociales'>Ciencias sociales</option>
                            <option value='Ciencias exactas'>Ciencias exactas</option>
                            <option value='Ciencias naturales'>Ciencias naturales</option>
                            <option value='Ciencias económicas'>Ciencias económicas</option>
                            <option value='Otro'>Otro</option>
                        </select>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='state'>Estado</label>
                        <select name='state' required onChange={e => setState(e.target.value)}>
                            <option value='Completo'>Completo</option>
                            <option value='Abandonado'>Abandonado</option>
                            <option value='En curso'>En curso</option>
                        </select>
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={() => {
                    cancelUnsavedChanges()
                    setShowNewEducationRecordModal(false)
                }}>Cancelar</button>
                <button className='btn btn-primary' onClick={() => {
                    if (institution && title && beginDate && endDate && classification && state && endDate > beginDate) {
                        editEducationOrExperienceRecord('education', 'add', {
                            institution,
                            title,
                            beginDate,
                            endDate,
                            classification,
                            state
                        })
                        setShowNewEducationRecordModal(false)
                }}}>Guardar</button>
            </Modal.Footer>
        </Modal>
    )
}