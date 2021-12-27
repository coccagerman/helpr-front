import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import genericAvatar from '../../../../assets/genericAvatar.jpeg'

export default function CandidateDetailModal({showCandidateDetailModal, setShowCandidateDetailModal, candidateId}) {

    const [candidateData, setCandidateData] = useState(null)

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

            {candidateData ?
                <>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <div className='modalHeader'>
                                <img src={candidateData.profilePicturePath ? candidateData.profilePicturePath : genericAvatar} alt='Profile picture' />
                                <div className='nameAndTitle'>
                                    <Link to={`/profile/${candidateId}`}><h1>{candidateData.basic.name ? candidateData.basic.name : null}</h1></Link>
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
                                candidateData.education.map(educationRecord => <div className='education-container education-record'>
                                    <div className='horizontal-division horizontal-division-leftSide'>
                                        <div className='record-data'>
                                            <h4>Institución:</h4>
                                            <p>{educationRecord.institution ? educationRecord.institution : null}</p>
                                        </div>

                                        <div className='record-data'>
                                            <h4>Título:</h4>
                                            <p>{educationRecord.title ? educationRecord.title : null}</p>
                                        </div>

                                        <div className='record-data'>
                                            <h4>Clasificación:</h4>
                                            <p>{educationRecord.classification ? educationRecord.classification : null}</p>
                                        </div>
                                    </div>

                                    <div className='horizontal-division'>
                                        <div className='record-data'>
                                            <h4>Estado:</h4>
                                            <p>{educationRecord.state ? educationRecord.state : null}</p>
                                        </div>

                                        <div className='record-data'>
                                            <h4>Fecha inicio:</h4>
                                            <p>{educationRecord.beginDate ? new Date(educationRecord.beginDate).toISOString().slice(0, 10) : null}</p>
                                        </div>
                                        <div className='record-data'>
                                            <h4>Fecha fin:</h4>
                                            <p>{educationRecord.endDate ? new Date(educationRecord.endDate).toISOString().slice(0, 10): null}</p>
                                        </div>
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
                                candidateData.experience.map(experienceRecord => <div className='experience-record'>
                                        <div className='experience-container'>
                                            <div className='horizontal-division horizontal-division-leftSide'>
                                                <div className='record-data'>
                                                    <h4>Posición:</h4>
                                                    <p>{experienceRecord.position ? experienceRecord.position : null}</p>
                                                </div>
                                                <div className='record-data'>
                                                    <h4>Empresa:</h4>
                                                    <p>{experienceRecord.company ? experienceRecord.company : null}</p>
                                                </div>
                                            </div>
                                            <div className='horizontal-division'>
                                                <div className='record-data'>
                                                    <h4>Fecha inicio:</h4>
                                                    <p>{experienceRecord.beginDate ? new Date(experienceRecord.beginDate).toISOString().slice(0, 10) : null}</p>
                                                </div>
                                                <div className='record-data'>
                                                    <h4>Fecha fin:</h4>
                                                    <p>{experienceRecord.endDate ? new Date(experienceRecord.endDate).toISOString().slice(0, 10) : null}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4>Descripción:</h4>
                                            <p>{experienceRecord.description ? experienceRecord.description : null}</p>
                                        </div>
                                </div>
                                )
                                :
                                <p>El usuario no tiene registros de experiencia</p>
                            }
                        </div>

                        <div className='modalContentSection'>
                            <h3>Intereses</h3>
                            <div className={candidateData.basic.interests ? 'interests-container' : null}>
                            {candidateData.basic.interests ?
                                candidateData.basic.interests.map(interest => <p className='interest-record'>{interest}</p>)
                                :
                                <p>El usuario no tiene registros de intereses</p>
                            }
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to={`/chatroom/${candidateData.basic._id}`}>
                            <button className='btn btn-primary'>Contactar</button>
                        </Link>
                    </Modal.Footer>
                </>
                :
                null
            }
        </Modal>
    )
}