import { Icon } from '@iconify/react'
import { useState } from 'react'
import InterestsRecord from './interestsRecord/InterestsRecord'
import InterestsRecordModal from './interestsRecordModal/InterestsRecordModal'

export default function InterestsSection() {

    const [showInterestsRecordModal, setShowInterestsRecordModal] = useState(false)

    return (
        <div className='interests profileSection'>
            <div className='profileSection-header'>
                <h2>Intereses</h2>
                <Icon icon='akar-icons:plus' color='#406bc8' className='icon' onClick={() => setShowInterestsRecordModal(true)}/>
            </div>
            <InterestsRecord setShowInterestsRecordModal={setShowInterestsRecordModal}/>

            <InterestsRecordModal showInterestsRecordModal={showInterestsRecordModal} setShowInterestsRecordModal={setShowInterestsRecordModal} />
        </div>
    )
}