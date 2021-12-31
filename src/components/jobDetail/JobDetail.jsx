import { useParams, Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import AuthenticationContext from '../../context/AuthenticationContext'
import ProfileContext from '../../context/ProfileContext'
import ApplicationSuccessModal from './applicationSuccessModal/ApplicationSuccessModal'

export default function JobDetail() {

    const { jobRecordId } = useParams()
    const { checkIfNotAuthenticatedAndRedirect, checkIfNotVolunteerAndRedirect } = useContext(AuthenticationContext)
    const { profileData, fetchProfileData } = useContext(ProfileContext)

    const [jobDetailData, setJobDetailData] = useState(null)
    const [showApplicationSuccessModal, setShowApplicationSuccessModal] = useState(false)
    const [userHasAlreadyApplied, setuserHasAlreadyApplied] = useState(false)

    const fetchJobDetailData = async () => {
        const accessToken = localStorage.getItem('accessToken')
        const serverUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVSERVER_URL : process.env.REACT_APP_PRODSERVER_URL

        const response = await fetch(`${serverUrl}/jobs/${jobRecordId}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            }
        })

        const data = await response.json()
        setJobDetailData(data)
    }

    const sendApplication = async () => {
        const accessToken = localStorage.getItem('accessToken')
        const serverUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVSERVER_URL : process.env.REACT_APP_PRODSERVER_URL

        const response = await fetch(`${serverUrl}/jobs/jobApplication/${jobRecordId}`, {
            method: 'POST',
            mode: 'cors',
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

    const checkPreviousApplications = () => {
        if (profileData && jobDetailData) {
            let previousApplicationsCount = 0

            jobDetailData.candidates.forEach(candidate => {
                if (candidate._id === profileData._id) {
                    previousApplicationsCount++
                    return
                }
            })

            if (previousApplicationsCount > 0) setuserHasAlreadyApplied(true)
        }
    }

    useEffect(() => {
        checkIfNotAuthenticatedAndRedirect()
        checkIfNotVolunteerAndRedirect()
        fetchProfileData()
        fetchJobDetailData()
    }, [])

    useEffect(() => checkPreviousApplications(), [jobDetailData, profileData])

    return (
        <section className='jobDetail'>
            {jobDetailData ?
            <>
                <div className='titleAndPublisher'>
                    <h1>{jobDetailData.position ? jobDetailData.position : null}</h1>
                    <h2>{jobDetailData.publisher ? <Link to={`/profile/${jobDetailData.publisherId}`}>{jobDetailData.publisher.name}</Link> : null}</h2>
                </div>

                <div className='mainDetails'>
                    <div>
                        <h3>Clasificación</h3>
                        <p>{jobDetailData.classification ? jobDetailData.classification : null}</p>

                        <h3>Fecha de publicación</h3>
                        <p>{jobDetailData.publishedDate ? new Date(jobDetailData.publishedDate).toISOString().slice(0, 10) : null}</p>
                    </div>

                    <div>
                        <h3>Duración del proyecto</h3>
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
            </>
            :
            null
            }
        </section>
    )
}