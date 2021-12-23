import { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import genericAvatar from '../../../../assets/genericAvatar.jpeg'

export default function CandidateDetailModal({showCandidateDetailModal, setShowCandidateDetailModal, candidateId}) {

    const [candidateData, setCandidateData] = useState(false)

    const fetchCandidateData = async () => {
        const accessToken = localStorage.getItem('accessToken')

        const response = await fetch(`http://localhost:3001/profile/user/${candidateId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            }
        })

        const data = await response.json()
        setCandidateData(data)
    }

    useEffect(() => fetchCandidateData(), [])

    return (
        <Modal show={showCandidateDetailModal} onHide={() => setShowCandidateDetailModal(false)} className='candidateDetailModal'>
            {console.log(candidateData.education[0])}
            {candidateData ?
                <>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <div className='modalHeader'>
                                <img src={candidateData.basic.profilePicture ? candidateData.basic.profilePicture : genericAvatar} alt='Profile picture' />
                                <div className='nameAndTitle'>
                                    <h1>{candidateData.basic.name ? candidateData.basic.name : null}</h1>
                                    <h2>{candidateData.basic.title ? candidateData.basic.title : null}</h2>
                                </div>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='modalContentSection'>
                            <h3>Sobre mi</h3>
                            <div>{candidateData.basic.about ?
                                candidateData.basic.about
                                :
                                <p>El usuario no ha completado esta sección</p>
                            }</div>
                        </div>

                        <div className='modalContentSection'>
                            <h3>Educación</h3>
                            {candidateData.education ?
                                candidateData.education.map(educationRecord => <div className='horizontal-container'>
                                        <div className='record-data'>
                                            <h3>Institución:</h3>
                                            <p>{educationRecord.institution ? educationRecord.institution : null}</p>
                                        </div>

                                        <div className='record-data'>
                                            <h3>Título:</h3>
                                            <p>{educationRecord.title ? educationRecord.title : null}</p>
                                        </div>

                                        <div className='record-data'>
                                            <h3>Clasificación:</h3>
                                            <p>{educationRecord.classification ? educationRecord.classification : null}</p>
                                        </div>

                                        <div className='record-data'>
                                            <h3>Estado:</h3>
                                            <p>{educationRecord.state ? educationRecord.state : null}</p>
                                        </div>

                                        <div className='record-data'>
                                            <h3>Fecha inicio:</h3>
                                            <p>{educationRecord.beginDate ? new Date(educationRecord.beginDate).toISOString().slice(0, 10) : null}</p>
                                        </div>
                                        <div className='record-data'>
                                            <h3>Fecha fin:</h3>
                                            <p>{educationRecord.endDate ? new Date(educationRecord.endDate).toISOString().slice(0, 10): null}</p>
                                        </div>
                                    </div>
                                )
                                :
                                <p>El usuario no tiene registros de educación</p>
                            }
                        </div>

                        <div className='modalContentSection'>
                            <h3>Experiencia</h3>
                            {candidateData.experience ?
                                candidateData.experience.map(experienceRecord => <div className='horizontal-container'>
                                    <div className='record-data'>
                                        <h3>Posición:</h3>
                                        <p>{experienceRecord.position ? experienceRecord.position : null}</p>
                                    </div>
                                    <div className='record-data'>
                                        <h3>Empresa:</h3>
                                        <p>{experienceRecord.company ? experienceRecord.company : null}</p>
                                    </div>
                                    <div className='record-data'>
                                        <h3>Fecha inicio:</h3>
                                        <p>{experienceRecord.beginDate ? new Date(experienceRecord.beginDate).toISOString().slice(0, 10) : null}</p>
                                    </div>
                                    <div className='record-data'>
                                        <h3>Fecha fin:</h3>
                                        <p>{experienceRecord.endDate ? new Date(experienceRecord.endDate).toISOString().slice(0, 10) : null}</p>
                                    </div>
                                </div>
                                )
                                :
                                <p>El usuario no tiene registros de experiencia</p>
                            }
                        </div>

                        <div className='modalContentSection'>
                            <h3>Intereses</h3>
                            {candidateData.basic.interests ?
                                candidateData.basic.interests.map(interest => <p>{interest}</p>)
                                :
                                <p>El usuario no tiene registros de intereses</p>
                            }
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-primary'>Contactar</button>
                        <button className='btn btn-red'>Rechazar</button>
                    </Modal.Footer>
                </>
                :
                null
            }
        </Modal>
    )
}