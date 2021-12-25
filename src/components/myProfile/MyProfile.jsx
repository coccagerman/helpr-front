import { useContext, useEffect } from 'react'
import AuthenticationContext from '../../context/AuthenticationContext'
import ProfileContext from '../../context/ProfileContext'
import ProfileVolunteerContent from './profileVolunteerContent/ProfileVolunteerContent'
import ProfileOrganizationContent from './profileOrganizationContent/ProfileOrganizationContent'

export default function MyProfile() {

    const { checkIfNotAuthenticatedAndRedirect } = useContext(AuthenticationContext)
    const { fetchProfileData, profileData, fetchProfilePicture } = useContext(ProfileContext)

    useEffect(() => {
        checkIfNotAuthenticatedAndRedirect()
        fetchProfileData()
        fetchProfilePicture()
    }, [])

    return (
        <section className='profile'>
            { profileData ? 
                profileData.accountType === 'volunteer' ? <ProfileVolunteerContent/> : <ProfileOrganizationContent/>
                : null
            }         
        </section>
    )
}