import { Icon } from '@iconify/react'
import { useContext, useState, useEffect } from 'react'
import ProfileContext from '../../../../context/ProfileContext'
import EducationRecord from './educationRecord/EducationRecord'
import NewEducationRecordModal from './newEducationRecordModal/NewEducationRecordModal'

export default function EducationSection() {

    const { fetchEducationRecords, educationRecords } = useContext(ProfileContext)

    const [showNewEducationRecordModal, setShowNewEducationRecordModal] = useState(false)

    useEffect(() => fetchEducationRecords(), [])

    return (
        <div className='education profileSection'>
            <div className='profileSection-header'>
                <h2>Educación</h2>
                <Icon icon='akar-icons:plus' color='#406bc8' className='icon' onClick={() => setShowNewEducationRecordModal(true)}/>
            </div>

            {(educationRecords && educationRecords.length > 0) ? 
                educationRecords.map(record => <EducationRecord record={record} key={record._id} />)
                :
                'Aún no has cargado registros de educación.'
            }
            
            <NewEducationRecordModal showNewEducationRecordModal={showNewEducationRecordModal} setShowNewEducationRecordModal={setShowNewEducationRecordModal} />
        </div>
    )
}