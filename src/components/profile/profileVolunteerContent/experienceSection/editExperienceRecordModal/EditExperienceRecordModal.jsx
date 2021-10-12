import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

export default function EditExperienceRecordModal({showEditExperienceRecordModal, setShowEditExperienceRecordModal, record}) {

    const [position, setPosition] = useState(record.position)
    const [company, setCompany] = useState(record.company)
    const [beginDate, setBeginDate] = useState(record.beginDate)
    const [endDate, setEndDate] = useState(record.endDate)
    const [description, setDescription] = useState(record.description)

    return (
        <Modal show={showEditExperienceRecordModal} onHide={() => setShowEditExperienceRecordModal(false)} className='editExperienceRecordModal'>
            <Modal.Header closeButton>
                <Modal.Title>Editar registro de educación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action='' method='post'>

                        <div className='input-container'>
                            <label htmlFor='position'>Posición</label>
                            <input type='text' name='position' defaultValue={position} onChange={e => setPosition(e.target.value)}/>
                        </div>

                        <div className='input-container'>
                            <label htmlFor='company'>Empresa</label>
                            <input type='text' name='company' defaultValue={company} onChange={e => setCompany(e.target.value)}/>
                        </div>

                        <div className='input-container'>
                            <label htmlFor='beginDate'>Fecha de inicio</label>
                            <input type='date' name='beginDate' defaultValue={beginDate} onChange={e => setBeginDate(e.target.value)}/>
                        </div>

                        <div className='input-container'>
                            <label htmlFor='endDate'>Fecha fin</label>
                            <input type='date' name='endDate' defaultValue={endDate} onChange={e => setEndDate(e.target.value)}/>
                        </div>

                        <div className='input-container'>
                            <label htmlFor='description'>Descripción</label>
                            <input type='text' name='description' defaultValue={description} onChange={e => setDescription(e.target.value)}/>
                        </div>


                    </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={() => setShowEditExperienceRecordModal(false)}>Cancelar</button>
                <button className='btn btn-primary' onClick={() => {
                        record.position = position
                        record.company = company
                        record.beginDate = beginDate
                        record.endDate = endDate
                        record.description = description
                        setShowEditExperienceRecordModal(false)
                    }
                }>Guardar</button>                
            </Modal.Footer>
        </Modal>
    )
}