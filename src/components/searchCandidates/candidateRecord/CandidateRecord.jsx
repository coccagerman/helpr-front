import { useState, useContext } from 'react'
import ProfileContext from '../../../context/ProfileContext'
import ChatContext from '../../../context/ChatContext'
import CandidateDetailModal from './candidateDetailModal/candidateDetailModal'

export default function CandidateRecord ({candidate}) {

    const [showCandidateDetailModal, setShowCandidateDetailModal] = useState(false)

    const { profileData } = useContext(ProfileContext)
    const { createNewChatRoom } = useContext(ChatContext)

    return (
        <article className='candidateRecord'>
            <p className='name'>{candidate.name ? candidate.name : null}</p>
            <p className='title'>{candidate.title ? candidate.title : null}</p>

            <button className='btn btn-primary' onClick={() => setShowCandidateDetailModal(true)}>Ver</button>
            <button className='btn btn-secondary' onClick={() => createNewChatRoom([profileData._id, candidate._id])}>Contactar</button>

            <CandidateDetailModal showCandidateDetailModal={showCandidateDetailModal} setShowCandidateDetailModal={setShowCandidateDetailModal} candidateId={candidate._id} candidate={candidate} />
        </article>
    )
}