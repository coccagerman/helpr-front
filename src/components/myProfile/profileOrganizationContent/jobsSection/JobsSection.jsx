import { Icon } from '@iconify/react'
import { useContext, useState, useEffect } from 'react'
import ProfileContext from '../../../../context/ProfileContext'
import JobRecord from './jobRecord/JobRecord'
import NewJobRecordModal from './newJobRecordModal/NewJobRecordModal'

export default function JobsSection() {

    const { fetchJobsRecords, jobsRecords } = useContext(ProfileContext)

    const [showNewJobRecordModal, setShowNewJobRecordModal] = useState(false)

    useEffect(() => fetchJobsRecords(), [])

    return (
        <div className='jobs profileSection'>
            <div className='profileSection-header'>
                <h2>Vacantes disponibles</h2>
                <Icon icon='akar-icons:plus' color='#406bc8' className='icon' onClick={() => setShowNewJobRecordModal(true)}/>
            </div>

            {(jobsRecords && jobsRecords.length > 0) ? 
                jobsRecords.map(record => <JobRecord record={record} key={record._id} />)
                :
                'Aún no has cargado vacantes disponibles.'
            }
            
            <NewJobRecordModal showNewJobRecordModal={showNewJobRecordModal} setShowNewJobRecordModal={setShowNewJobRecordModal} />
        </div>
    )
}