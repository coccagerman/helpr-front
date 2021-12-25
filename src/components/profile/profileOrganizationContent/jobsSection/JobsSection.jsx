import { useContext } from 'react'
import ProfileContext from '../../../../context/ProfileContext'
import JobRecord from './jobRecord/JobRecord'

export default function JobsSection() {

    const { userProfileData } = useContext(ProfileContext)

    return (
        <div className='jobs profileSection'>
            <div className='profileSection-header'>
                <h2>Vacantes disponibles</h2>
            </div>

            {(userProfileData.publishedJobs && userProfileData.publishedJobs.length > 0) ? 
                userProfileData.publishedJobs.map(record => <JobRecord record={record} key={record._id} />)
                :
                'El usuario no tiene vacantes disponibles.'
            }
        </div>
    )
}