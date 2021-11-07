import ProfilePic from '../../../assets/mockProfilePic-org.jpg'
import AboutSection from './aboutSection/AboutSection'
import VacanciesSection from './vacanciesSection/VacanciesSection'
import InterestsSection from './interestsSection/interestsSection'

export default function ProfileOrganizationContent() {

    return (
        <section className='profileOrganizationContent'>

            <div className='profileHeader'>
                <img src={ProfilePic} alt='Profile' />
                <div className='nameAndTittle'>
                    <h1>Green peace</h1>
                    <p>Naturaleza y ecología</p>
                </div>
            </div>

            <AboutSection />

            <VacanciesSection />

            <InterestsSection />

        </section>
    )
}