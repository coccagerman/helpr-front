import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AuthenticationContext from '../../context/AuthenticationContext'
import ProfileContext from '../../context/ProfileContext'
import ProfileVolunteerContent from './profileVolunteerContent/ProfileVolunteerContent'
import ProfileOrganizationContent from './profileOrganizationContent/ProfileOrganizationContent'

export default function Profile() {

    const { checkIfNotAuthenticatedAndRedirect } = useContext(AuthenticationContext)
    const { fetchProfileData, userProfileData, fetchProfilePicture } = useContext(ProfileContext)

    const { userId } = useParams()

    useEffect(() => {
        checkIfNotAuthenticatedAndRedirect()
        fetchProfileData(userId)
        fetchProfilePicture(userId)
    }, [])

    return (
        <section className='profile'>
            { userProfileData ? 
                userProfileData.basic.accountType === 'volunteer' ? <ProfileVolunteerContent/> : <ProfileOrganizationContent/>
                : null
            }         
        </section>
    )
}