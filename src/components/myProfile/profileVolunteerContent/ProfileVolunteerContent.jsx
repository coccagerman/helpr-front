import { useContext, useState } from 'react'
import ProfileContext from '../../../context/ProfileContext'

import TitleRecordModal from './TitleRecordModal'
import ProfilePictureModal from './ProfilePictureModal'
import ProfilePictureErrorModal from './ProfilePictureErrorModal'
import AboutSection from './aboutSection/AboutSection'
import EducationSection from './educationSection/EducationSection'
import ExperienceSection from './experienceSection/ExperienceSection'
import InterestsSection from './interestsSection/interestsSection'
import RecommendationsSection from './recommendationsSection/RecommendationsSection'

import { Icon } from '@iconify/react'
import genericAvatar from '../../../assets/genericAvatar.jpeg'

export default function ProfileVolunteerContent() {

    const { profileData, profilePicture } = useContext(ProfileContext)

    const [showTitleRecordModal, setShowTitleRecordModal] = useState(false)
    const [showProfilePictureModal, setShowProfilePictureModal] = useState(false)
    
    return (
        <section className='profileVolunteerContent'>

            <div className='profileHeader'>
                <div className='profilePicture-container'>
                    <img src={profilePicture ? profilePicture :  genericAvatar} alt='Profile' onClick={() => setShowProfilePictureModal(true)} />
                    <Icon icon='bx:bxs-edit' color='#406bc8' className='icon' onClick={() => setShowProfilePictureModal(true)} />
                </div>
                <div className='nameAndTittle'>
                    <h1>{profileData.name}</h1>
                    <div className='title-container'>
                        <p>{profileData.title ? profileData.title : 'Aún no completaste este campo.'}</p>
                        <Icon icon='bx:bxs-edit' color='#406bc8' className='icon' onClick={() => setShowTitleRecordModal(true)} />
                    </div>
                </div>
            </div>

            <AboutSection />

            <EducationSection />

            <ExperienceSection />

            <InterestsSection />

            <RecommendationsSection />

            <ProfilePictureModal showProfilePictureModal={showProfilePictureModal} setShowProfilePictureModal={setShowProfilePictureModal} />
            <ProfilePictureErrorModal setShowProfilePictureModal={setShowProfilePictureModal} />
            <TitleRecordModal showTitleRecordModal={showTitleRecordModal} setShowTitleRecordModal={setShowTitleRecordModal} />

        </section>
    )
}