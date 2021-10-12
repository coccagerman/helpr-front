import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

export default function NewExperienceRecordModal({showNewExperienceRecordModal, setShowNewExperienceRecordModal, addNewExperienceRecord}) {

    const [position, setPosition] = useState(null)
    const [company, setCompany] = useState(null)
    const [beginDate, setBeginDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [description, setDescription] = useState(null)

    return (
        <Modal show={showNewExperienceRecordModal} onHide={() => setShowNewExperienceRecordModal(false)} className='newExperienceRecordModal'>
            <Modal.Header closeButton>
                <Modal.Title>Nuevo registro de experiencia</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action='' method='post'>

                    <div className='input-container'>
                        <label htmlFor='position'>Posición</label>
                        <input type='text' name='position' onChange={e => setPosition(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='company'>Empresa</label>
                        <input type='text' name='company' onChange={e => setCompany(e.target.value)}/>
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
                        <label htmlFor='description'>Descripción</label>
                        <input type='text' name='description' onChange={e => setDescription(e.target.value)}/>
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={() => setShowNewExperienceRecordModal(false)}>Cancelar</button>
                <button className='btn btn-primary' onClick={() => {
                        addNewExperienceRecord({
                            position,
                            company,
                            beginDate,
                            endDate,
                            description
                        })
                        setShowNewExperienceRecordModal(false)
                    }
                }>Guardar</button>

            </Modal.Footer>
        </Modal>
    )
}