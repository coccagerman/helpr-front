import { Icon } from '@iconify/react'
import { useState } from 'react'
import ExperienceRecord from './experienceRecord/ExperienceRecord'
import ExperienceRecordModal from './experienceRecordModal/ExperienceRecordModal'

export default function ExperienceSection() {

    const [showExperienceRecordModal, setShowExperienceRecordModal] = useState(false)

    return (
        <div className='experience profileSection'>
            <div className='profileSection-header'>
                <h2>Experiencia</h2>
                <Icon icon='akar-icons:plus' color='#406bc8' className='icon' onClick={() => setShowExperienceRecordModal(true)}/>
            </div>
            <ExperienceRecord setShowExperienceRecordModal={setShowExperienceRecordModal}/>

            <ExperienceRecordModal showExperienceRecordModal={showExperienceRecordModal} setShowExperienceRecordModal={setShowExperienceRecordModal} />
        </div>
    )
}