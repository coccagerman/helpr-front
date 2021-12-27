import { useState } from 'react'
import { Link } from 'react-router-dom'
import CandidateDetailModal from './candidateDetailModal/candidateDetailModal'

export default function CandidateRecord ({candidate}) {

    const [showCandidateDetailModal, setShowCandidateDetailModal] = useState(false)

    return (
        <article className='candidateRecord'>
            <p className='name'>{candidate.name ? candidate.name : null}</p>
            <p className='title'>{candidate.title ? candidate.title : null}</p>

            <button className='btn btn-primary' onClick={() => setShowCandidateDetailModal(true)}>Ver</button>
            <Link to={`/chatroom/${candidate.id}`}>
                <button className='btn btn-secondary'>Contactar</button>
            </Link>

            <CandidateDetailModal showCandidateDetailModal={showCandidateDetailModal} setShowCandidateDetailModal={setShowCandidateDetailModal} candidateId={candidate._id} candidate={candidate} />
        </article>
    )
}