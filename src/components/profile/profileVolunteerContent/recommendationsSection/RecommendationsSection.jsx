import { Icon } from '@iconify/react'
import { useState } from 'react'
import RecommendationsRecord from './recommendationsRecord/RecommendationsRecord'
import RecommendationsRecordModal from './recommendationsRecordModal/RecommendationsRecordModal'

export default function RecommendationsSection() {

    const [showRecommendationsRecordModal, setShowRecommendationsRecordModal] = useState(false)

    return (
        <div className='Recommendations profileSection'>
            <div className='profileSection-header'>
                <h2>Intereses</h2>
                <Icon icon='akar-icons:plus' color='#406bc8' className='icon' onClick={() => setShowRecommendationsRecordModal(true)}/>
            </div>
            <RecommendationsRecord setShowRecommendationsRecordModal={setShowRecommendationsRecordModal}/>

            <RecommendationsRecordModal showRecommendationsRecordModal={showRecommendationsRecordModal} setShowRecommendationsRecordModal={setShowRecommendationsRecordModal} />
        </div>
    )
}