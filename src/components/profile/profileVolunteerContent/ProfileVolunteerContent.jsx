import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AuthenticationContext from '../../../context/AuthenticationContext'
import ProfileContext from '../../../context/ProfileContext'

import AboutSection from './aboutSection/AboutSection'
import EducationSection from './educationSection/EducationSection'
import ExperienceSection from './experienceSection/ExperienceSection'
import InterestsSection from './interestsSection/interestsSection'
import RecommendationsSection from './recommendationsSection/RecommendationsSection'

import genericAvatar from '../../../assets/genericAvatar.jpeg'

export default function ProfileVolunteerContent() {

    const { userProfileData, userProfilePicture } = useContext(ProfileContext)
    const { checkIfNotOrganizationAndRedirect } = useContext(AuthenticationContext)

    useEffect(() => checkIfNotOrganizationAndRedirect(), [])
  
    return (
        <section className='profileVolunteerContent'>

            <div className='profileHeader'>
                <div className='profilePicture-container'>
                    <img src={userProfilePicture ? userProfilePicture :  genericAvatar} alt='Profile' />
                </div>
                <div className='nameAndTittle'>
                    <h1>{userProfileData.basic.name}</h1>
                    <div className='title-container'>
                        <p>{userProfileData.basic.title ? userProfileData.basic.title : null}</p>
                    </div>
                    <Link to={`/chatroom/${userProfileData.basic._id}`}>
                        <button className='btn btn-primary'>Contactar</button>
                    </Link>
                </div>
            </div>

            <AboutSection />

            <EducationSection />

            <ExperienceSection />

            <InterestsSection />

            <RecommendationsSection />

        </section>
    )
}