import { Icon } from '@iconify/react'
import { useState } from 'react'
import EducationRecord from './educationRecord/EducationRecord'
import EducationRecordModal from './educationRecordModal/EducationRecordModal'

export default function EducationSection() {

    const [showEducationRecordModal, setShowEducationRecordModal] = useState(false)

    return (
        <div className='education profileSection'>
            <div className='profileSection-header'>
                <h2>Educación</h2>
                <Icon icon='akar-icons:plus' color='#406bc8' className='icon' onClick={() => setShowEducationRecordModal(true)}/>
            </div>
            <EducationRecord setShowEducationRecordModal={setShowEducationRecordModal}/>

            <EducationRecordModal showEducationRecordModal={showEducationRecordModal} setShowEducationRecordModal={setShowEducationRecordModal} />
        </div>
    )
}