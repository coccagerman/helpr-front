import { Icon } from '@iconify/react'
import { useContext, useState, useEffect } from 'react'
import ProfileContext from '../../../../context/ProfileContext'
import ExperienceRecord from './experienceRecord/ExperienceRecord'
import NewExperienceRecordModal from './newExperienceRecordModal/NewExperienceRecordModal'

export default function ExperienceSection() {

    const { fetchExperienceRecords, experienceRecords } = useContext(ProfileContext)

    const [showNewExperienceRecordModal, setShowNewExperienceRecordModal] = useState(false)

    useEffect(() => fetchExperienceRecords(), [])

    return (
        <div className='experience profileSection'>
            <div className='profileSection-header'>
                <h2>Experiencia</h2>
                <Icon icon='akar-icons:plus' color='#406bc8' className='icon' onClick={() => {
                    setShowNewExperienceRecordModal(true)
                }}/>
            </div>
            
            {(experienceRecords && experienceRecords.length > 0)? 
                experienceRecords.map(record => <ExperienceRecord record={record} key={record._id} />)
                :
                'Aún no has cargado registros de experiencia.'
            }

            <NewExperienceRecordModal showNewExperienceRecordModal={showNewExperienceRecordModal} setShowNewExperienceRecordModal={setShowNewExperienceRecordModal} />
        </div>
    )
}