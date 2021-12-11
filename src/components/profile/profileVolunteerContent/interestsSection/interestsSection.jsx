import { Icon } from '@iconify/react'
import { useContext, useState } from 'react'
import ProfileContext from '../../../../context/ProfileContext'
import InterestRecord from './interestRecord/InterestRecord'
import NewInterestRecordModal from './newInterestRecordModal/NewInterestRecordModal'

export default function InterestsSection() {

    const { profileData } = useContext(ProfileContext)

    const [showNewInterestRecordModal, setShowNewInterestRecordModal] = useState(false)

    return (
        <div className='interests profileSection'>
            <div className='profileSection-header'>
                <h2>Intereses</h2>
                <Icon icon='akar-icons:plus' color='#406bc8' className='icon' onClick={() => setShowNewInterestRecordModal(true)}/>
            </div>

            <div className='interests-container'>
            {(profileData.interests && profileData.interests.length > 0) ? 
                profileData.interests.map((record, i) => <InterestRecord record={record} key={i} />)
                :
                'Aún no has cargado registros de intereses.'
            }
            </div>

            <NewInterestRecordModal showNewInterestRecordModal={showNewInterestRecordModal} setShowNewInterestRecordModal={setShowNewInterestRecordModal} />
        </div>
    )
}