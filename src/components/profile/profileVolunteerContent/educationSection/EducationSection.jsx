import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProfileContext from '../../../../context/ProfileContext'
import EducationRecord from './educationRecord/EducationRecord'

export default function EducationSection() {

    const { userProfileData } = useContext(ProfileContext)

    return (
        <div className='education profileSection'>
            <div className='profileSection-header'>
                <h2>Educación</h2>
            </div>

            {(userProfileData.education && userProfileData.education.length > 0) ? 
                userProfileData.education.map(record => <EducationRecord record={record} key={record._id} />)
                :
                'El usuario no ha cargado registros de educación.'
            }
        </div>
    )
}