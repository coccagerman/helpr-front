import { useContext, useState } from 'react'
import ProfileContext from '../../../context/ProfileContext'
import TitleRecordModal from './TitleRecordModal'
import ProfilePic from '../../../assets/mockProfilePic.jpg'
import AboutSection from './aboutSection/AboutSection'
import EducationSection from './educationSection/EducationSection'
import ExperienceSection from './experienceSection/ExperienceSection'
import InterestsSection from './interestsSection/interestsSection'
import RecommendationsSection from './recommendationsSection/RecommendationsSection'

export default function ProfileVolunteerContent() {

    const { profileData } = useContext(ProfileContext)

    const [showTitleRecordModal, setShowTitleRecordModal] = useState(false)
    
    return (
        <section className='profileVolunteerContent'>

            <div className='profileHeader'>
                <img src={ProfilePic} alt='Profile' />
                <div className='nameAndTittle'>
                    <h1>{profileData.name}</h1>
                    <p onClick={() => setShowTitleRecordModal(true)}>{profileData.title ? profileData.title : 'Aún no completaste este campo.'}</p>
                </div>
            </div>

            <AboutSection />

            <EducationSection />

            <ExperienceSection />

            <InterestsSection />

            <RecommendationsSection />

            <TitleRecordModal showTitleRecordModal={showTitleRecordModal} setShowTitleRecordModal={setShowTitleRecordModal} />

        </section>
    )
}