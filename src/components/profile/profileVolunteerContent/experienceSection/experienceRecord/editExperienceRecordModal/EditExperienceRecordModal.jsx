import Modal from 'react-bootstrap/Modal'
import { useContext, useState } from 'react'
import ProfileContext from '../../../../../../context/ProfileContext'

export default function EditExperienceRecordModal({showEditExperienceRecordModal, setShowEditExperienceRecordModal, record}) {

    const { editEducationOrExperienceRecord } = useContext(ProfileContext)

    const [position, setPosition] = useState(record.position)
    const [company, setCompany] = useState(record.company)
    const [beginDate, setBeginDate] = useState(new Date(record.beginDate).toISOString().slice(0, 10))
    const [endDate, setEndDate] = useState(new Date(record.endDate).toISOString().slice(0, 10))
    const [description, setDescription] = useState(record.description)

    const cancelUnsavedChanges = () => {
        setPosition(record.position)
        setCompany(record.company)
        setBeginDate(new Date(record.beginDate).toISOString().slice(0, 10))
        setEndDate(new Date(record.endDate).toISOString().slice(0, 10))
        setDescription(record.description)
    }

    return (
        <Modal show={showEditExperienceRecordModal} className='editExperienceRecordModal' onHide={() => {
            cancelUnsavedChanges()
            setShowEditExperienceRecordModal(false)
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
                        <label htmlFor='company'>Empresa</label>
                        <input type='text' name='company' defaultValue={company} required onChange={e => setCompany(e.target.value)}/>
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
                        <label htmlFor='description'>Descripción</label>
                        <input type='text' name='description' defaultValue={description} required onChange={e => setDescription(e.target.value)}/>
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={() => {
                    setShowEditExperienceRecordModal(false)
                    cancelUnsavedChanges()
                }}>Cancelar</button>
                <button className='btn btn-primary' onClick={() => {
                        editEducationOrExperienceRecord('experience', 'edit', {
                        recordId: record._id,
                        position,
                        company,
                        beginDate,
                        endDate,
                        description
                    })
                    setShowEditExperienceRecordModal(false)
                }}>Guardar</button>                
            </Modal.Footer>
        </Modal>
    )
}