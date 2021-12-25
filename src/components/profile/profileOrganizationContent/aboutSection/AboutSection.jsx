import { useContext } from 'react'
import ProfileContext from '../../../../context/ProfileContext'

export default function AboutSection() {

    const { userProfileData } = useContext(ProfileContext)

    return (
        <div className='about profileSection'>
            <div className='profileSection-header'>
                <h2>Sobre mi</h2>
            </div>
            <p>{userProfileData.basic.about ? userProfileData.basic.about : 'El usuario aún no completó esta sección.'}</p>
        </div>
    )
}