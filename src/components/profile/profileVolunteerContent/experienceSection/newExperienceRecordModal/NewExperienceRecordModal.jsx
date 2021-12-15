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
                        <input type='text' name='position' required onChange={e => setPosition(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='company'>Empresa</label>
                        <input type='text' name='company' required onChange={e => setCompany(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='beginDate'>Fecha de inicio</label>
                        <input type='date' name='beginDate' required onChange={e => setBeginDate(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='endDate'>Fecha fin</label>
                        <input type='date' name='endDate' required onChange={e => setEndDate(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='description'>Descripción</label>
                        <input type='text' name='description' required onChange={e => setDescription(e.target.value)}/>
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={() => {
                    cancelUnsavedChanges()
                    setShowNewExperienceRecordModal(false)
                }}>Cancelar</button>
                <button className='btn btn-primary' onClick={() => {
                    if (position && company && beginDate && endDate && description){
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