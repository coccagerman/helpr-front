import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import AuthenticationContext from '../../context/AuthenticationContext'
import ProfileContext from '../../context/ProfileContext'
import ApplicationSuccessModal from './applicationSuccessModal/ApplicationSuccessModal'

export default function JobDetail() {

    const { jobRecordId } = useParams()
    const { checkIfNotAuthenticatedAndRedirect, checkIfNotVolunteerAndRedirect } = useContext(AuthenticationContext)
    const { profileData, fetchProfileData } = useContext(ProfileContext)

    const [jobDetailData, setJobDetailData] = useState([])
    const [showApplicationSuccessModal, setShowApplicationSuccessModal] = useState(false)
    const [userHasAlreadyApplied, setuserHasAlreadyApplied] = useState(false)

    const fetchJobDetailData = async () => {
        const accessToken = localStorage.getItem('accessToken')

        const response = await fetch(`http://localhost:3001/jobs/${jobRecordId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            }
        })

        const data = await response.json()
        setJobDetailData(data)

        if (profileData) {
            let previousApplicationsCheck = 0

            data.candidates.forEach(candidate => {
            if (candidate._id === profileData._id) {
                previousApplicationsCheck++
                return
            }
            })

            if (previousApplicationsCheck > 0) setuserHasAlreadyApplied(true)
        }
    }

    const sendApplication = async () => {
        const accessToken = localStorage.getItem('accessToken')

        const response = await fetch(`http://localhost:3001/jobs/jobApplication/${jobRecordId}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            }
        })

        const data = await response.json()

        if (data === 'Application successful') {
            setShowApplicationSuccessModal(true)
            setuserHasAlreadyApplied(true)
        }
    }

    useEffect(() => {
        checkIfNotAuthenticatedAndRedirect()
        checkIfNotVolunteerAndRedirect()
        fetchProfileData()
        fetchJobDetailData()
    }, [])

    return (
        <section className='jobDetail'>

            <div className='titleAndPublisher'>
                <h1>{jobDetailData.position ? jobDetailData.position : null}</h1>
                <h2>{jobDetailData.publisher ? jobDetailData.publisher.name : null}</h2>
            </div>

            <div className='mainDetails'>
                <div>
                    <h3>Clasificación</h3>
                    <p>{jobDetailData.classification ? jobDetailData.classification : null}</p>

                    <h3>Fecha de publicación</h3>
                    <p>{jobDetailData.publishedDate ? new Date(jobDetailData.publishedDate).toISOString().slice(0, 10) : null}</p>
                </div>

                <div>
                    <h3>Tiempo estimado</h3>
                    <p>{jobDetailData.projectDuration ? jobDetailData.projectDuration : null}</p>

                    <h3>Dedicación horaria</h3>
                    <p>{jobDetailData.hourDedication ? jobDetailData.hourDedication : null}</p>
                </div>
            </div>

            <h3>Descripción</h3>
            <p>{jobDetailData.description ? jobDetailData.description : null}</p>

            <h3>Requisitos</h3>
            <p>{jobDetailData.requisites ? jobDetailData.requisites : null}</p>

            <button className='btn btn-primary' disabled={userHasAlreadyApplied} onClick={() => sendApplication()}>
                {userHasAlreadyApplied ? 'Ya aplicaste a esta vacante' : 'Postular'}
            </button>

            <ApplicationSuccessModal showApplicationSuccessModal={showApplicationSuccessModal} setShowApplicationSuccessModal={setShowApplicationSuccessModal} />

        </section>
    )
}