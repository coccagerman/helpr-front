import { useContext, useEffect } from 'react'
import ProfileContext from '../../../context/ProfileContext'
import AuthenticationContext from '../../../context/AuthenticationContext'

import AboutSection from './aboutSection/AboutSection'
import JobsSection from './jobsSection/JobsSection'
import InterestsSection from './interestsSection/interestsSection'

import genericAvatar from '../../../assets/genericAvatar.jpeg'

export default function ProfileOrganizationContent() {

    const { userProfileData, userProfilePicture } = useContext(ProfileContext)
    const { checkIfNotVolunteerAndRedirect } = useContext(AuthenticationContext)

    useEffect(() => checkIfNotVolunteerAndRedirect(), [])

    return (
        <section className='profileOrganizationContent'>

            <div className='profileHeader'>
                <div className='profilePicture-container'>
                    <img src={userProfilePicture ? userProfilePicture :  genericAvatar} alt='Profile' />
                </div>
                <div className='nameAndTittle'>
                    <h1>{userProfileData.basic.name}</h1>
                    <div className='title-container'>
                        <p>{userProfileData.basic.title ? userProfileData.basic.title : null}</p>
                    </div>
                </div>
            </div>

            <AboutSection />

            <JobsSection />

            <InterestsSection />

        </section>
    )
}