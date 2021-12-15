import Modal from 'react-bootstrap/Modal'
import { useContext, useState } from 'react'
import ProfileContext from '../../../../../../context/ProfileContext'

export default function EditEducationRecordModal({showEditEducationRecordModal, setShowEditEducationRecordModal, record}) {

    const { editEducationOrExperienceRecord } = useContext(ProfileContext)

    const [institution, setInstitution] = useState(record.institution)
    const [title, setTitle] = useState(record.title)
    const [beginDate, setBeginDate] = useState(new Date(record.beginDate).toISOString().slice(0, 10))
    const [endDate, setEndDate] = useState(new Date(record.endDate).toISOString().slice(0, 10))
    const [classification, setClassification] = useState(record.classification)
    const [state, setState] = useState(record.state)

    const cancelUnsavedChanges = () => {
        setInstitution(record.institution)
        setTitle(record.title)
        setBeginDate(new Date(record.beginDate).toISOString().slice(0, 10))
        setEndDate(new Date(record.endDate).toISOString().slice(0, 10))
        setClassification(record.classification)
        setState(record.state)
    }

    return (
        <Modal show={showEditEducationRecordModal} className='editEducationRecordModal' onHide={() => {
            cancelUnsavedChanges()
            setShowEditEducationRecordModal(false)
        }}>
            <Modal.Header closeButton>
                <Modal.Title>Editar registro de educación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>

                    <div className='input-container'>
                        <label htmlFor='institution'>Institución</label>
                        <input type='text' name='institution' defaultValue={institution} required onChange={e => setInstitution(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='title'>Título</label>
                        <input type='text' name='title' defaultValue={title} required onChange={e => setTitle(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='beginDate'>Fecha de inicio</label>
                        <input type='date' name='beginDate' defaultValue={beginDate} required onChange={e => {setBeginDate(e.target.value)}}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='endDate'>Fecha fin</label>
                        <input type='date' name='endDate' defaultValue={endDate} required onChange={e => setEndDate(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='classification'>Clasificación</label>
                        <select name='classification' defaultValue={classification} required onChange={e => setClassification(e.target.value)}>
                            <option value='Ciencias sociales'>Ciencias sociales</option>
                            <option value='Ciencias exactas'>Ciencias exactas</option>
                            <option value='Ciencias naturales'>Ciencias naturales</option>
                            <option value='Ciencias económicas'>Ciencias económicas</option>
                            <option value='Otro'>Otro</option>
                        </select>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='state'>Estado</label>
                        <select name='state' defaultValue={state} required onChange={e => setState(e.target.value)}>
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
                    setShowEditEducationRecordModal(false)
                }}>Cancelar</button>
                <button className='btn btn-primary' onClick={() => {
                    editEducationOrExperienceRecord('education', 'edit', {
                        recordId: record._id,
                        institution,
                        title,
                        beginDate,
                        endDate,
                        classification,
                        state
                    })
                    setShowEditEducationRecordModal(false)
                }}>Guardar</button>                
            </Modal.Footer>
        </Modal>
    )
}