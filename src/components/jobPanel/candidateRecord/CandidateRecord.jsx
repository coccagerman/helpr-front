import { useState } from 'react'
import { Link } from 'react-router-dom'
import CandidateDetailModal from './candidateDetailModal/candidateDetailModal'

export default function CandidateRecord ({candidate, jobRecordId, fetchJobDetailData}) {

    const [showCandidateDetailModal, setShowCandidateDetailModal] = useState(false)

    const rejectOrReconsiderCandidate = async (jobRecordId, candidateId, queryType) => {
        const accessToken = localStorage.getItem('accessToken')

        const response = await fetch(`http://localhost:3001/jobs/rejectOrReconsiderCandidate`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            },
            body : JSON.stringify({
                jobRecordId,
                candidateId,
                queryType
            })
        })

        const data = await response.json()
        if (data === 'Successful edition') fetchJobDetailData()
    }

    return (
        <article className='candidateRecord-jp'>
            <p className='name'>{candidate.name ? candidate.name : null}</p>
            <p className='title'>{candidate.title ? candidate.title : null}</p>
            <p>{candidate.state ? `Estado: ${candidate.state}` : null}</p>

            <button className='btn btn-primary' onClick={() => setShowCandidateDetailModal(true)}>Ver</button>
            <Link to={`/chatroom/${candidate.id}`}>
                <button className='btn btn-primary'>Contactar</button>
            </Link>

            {candidate.state === 'Pendiente de revisión' ?
                <button className='btn btn-red' onClick={() => rejectOrReconsiderCandidate(jobRecordId, candidate.id, 'reject')}>Rechazar</button>
                :
                <button className='btn btn-tertiary' onClick={() => rejectOrReconsiderCandidate(jobRecordId, candidate.id, 'reconsider')}>Reconsiderar</button>
            }

            <CandidateDetailModal showCandidateDetailModal={showCandidateDetailModal} setShowCandidateDetailModal={setShowCandidateDetailModal} candidateId={candidate.id} candidateState={candidate.state} rejectOrReconsiderCandidate={rejectOrReconsiderCandidate} jobRecordId={jobRecordId} />
        </article>
    )
}