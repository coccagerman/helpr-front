import ProfilePic from '../../../assets/mockProfilePic.jpg'
import AboutSection from './aboutSection/AboutSection'
import EducationSection from './educationSection/EducationSection'
import ExperienceSection from './experienceSection/ExperienceSection'
import InterestsSection from './interestsSection/interestsSection'
import RecommendationsSection from './recommendationsSection/RecommendationsSection'

export default function ProfileVolunteerContent() {

    return (
        <section className='profileVolunteerContent'>

            <div className='profileHeader'>
                <img src={ProfilePic} alt='Profile' />
                <div className='nameAndTittle'>
                    <h1>Germán cocca</h1>
                    <p>Full stack developer</p>
                </div>
            </div>

            <AboutSection />

            <EducationSection />

            <ExperienceSection />

            <InterestsSection />

            {/* <RecommendationsSection /> */}

        </section>
    )
}