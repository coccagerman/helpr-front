import { useContext } from 'react'
import ProfileContext from '../../../../context/ProfileContext'
import ExperienceRecord from './experienceRecord/ExperienceRecord'

export default function ExperienceSection() {

    const { userProfileData } = useContext(ProfileContext)

    return (
        <div className='experience profileSection'>
            <div className='profileSection-header'>
                <h2>Experiencia</h2>
            </div>
            
            {(userProfileData.experience && userProfileData.experience.length > 0)? 
                userProfileData.experience.map(record => <ExperienceRecord record={record} key={record._id} />)
                :
                'El usuario no ha cargado registros de experiencia.'
            }
        </div>
    )
}