import { useContext, useState } from 'react'
import ProfileContext from '../../../context/ProfileContext'

import AboutSection from './aboutSection/AboutSection'
import VacanciesSection from './vacanciesSection/VacanciesSection'
import InterestsSection from './interestsSection/interestsSection'
import TitleRecordModal from './TitleRecordModal'
import ProfilePictureModal from './ProfilePictureModal'
import ProfilePictureErrorModal from './ProfilePictureErrorModal'

import { Icon } from '@iconify/react'
import genericAvatar from '../../../assets/genericAvatar.jpeg'

export default function ProfileOrganizationContent() {

    const { profileData, profilePicture } = useContext(ProfileContext)

    const [showTitleRecordModal, setShowTitleRecordModal] = useState(false)
    const [showProfilePictureModal, setShowProfilePictureModal] = useState(false)

    return (
        <section className='profileOrganizationContent'>

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

            <VacanciesSection />

            <InterestsSection />

            <ProfilePictureModal showProfilePictureModal={showProfilePictureModal} setShowProfilePictureModal={setShowProfilePictureModal} />
            <ProfilePictureErrorModal setShowProfilePictureModal={setShowProfilePictureModal} />
            <TitleRecordModal showTitleRecordModal={showTitleRecordModal} setShowTitleRecordModal={setShowTitleRecordModal} />

        </section>
    )
}