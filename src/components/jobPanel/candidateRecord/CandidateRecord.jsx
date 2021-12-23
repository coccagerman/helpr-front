import { useState } from 'react'
import CandidateDetailModal from './candidateDetailModal/candidateDetailModal'

export default function CandidateRecord ({candidate}) {

    const [showCandidateDetailModal, setShowCandidateDetailModal] = useState(false)

    return (
        <article className='candidateRecord'>
            <p className='name'>{candidate.name ? candidate.name : null}</p>
            <p className='title'>{candidate.title ? candidate.title : null}</p>
            <p>{candidate.state ? `Estado: ${candidate.state}` : null}</p>

            <button className='btn btn-primary' onClick={() => setShowCandidateDetailModal(true)}>Ver</button>
            <button className='btn btn-secondary'>Contactar</button>
            <button className='btn btn-red'>Rechazar</button>

            <CandidateDetailModal showCandidateDetailModal={showCandidateDetailModal} setShowCandidateDetailModal={setShowCandidateDetailModal} candidateId={candidate.id} />
        </article>
    )
}