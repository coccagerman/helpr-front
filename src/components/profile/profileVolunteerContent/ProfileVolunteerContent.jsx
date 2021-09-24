import { Icon } from '@iconify/react'
import ProfilePic from '../../../assets/mockProfilePic.jpg'
import EducationRecord from './educationRecord/EducationRecord'
import ExperienceRecord from './experienceRecord/ExperienceRecord'
import InterestsRecord from './interestsRecord/InterestsRecord'
import RecommendationsRecord from './recommendationsRecord/RecommendationsRecord'

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

            <div className='about profileSection'>
                <div className='profileSection-header'>
                    <h2>Sobre mi</h2>
                    <Icon icon='bx:bxs-edit' color='#406bc8' className='icon'/>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus et accusantium enim repellat nam, asperiores architecto facere eligendi quia dolor blanditiis tempore fuga. Ipsum nisi reiciendis nostrum reprehenderit qui dolor a ad facere dolorum aliquid, odio sit officiis, architecto optio enim? Aut quas cupiditate ex temporibus libero alias qui repellendus sint earum quia laudantium, voluptates et mollitia, debitis pariatur quod quidem odio? Excepturi illum alias aut repudiandae beatae hic fugiat porro in explicabo. Quod dolorum dicta a eum dolor aliquid facere nihil dolores corrupti blanditiis id maxime asperiores veritatis repellat eos, consequatur nobis maiores! Amet corporis corrupti molestiae maxime, quisquam odit quos eos ipsum dolorum illo ratione officiis consequuntur consequatur distinctio, saepe sequi. Accusantium beatae pariatur rerum dolorem enim voluptates molestias deleniti modi voluptatem commodi asperiores recusandae architecto, aliquid tempore eos illo, eaque error aspernatur debitis sunt quasi perspiciatis, corporis magni. Ex libero tempore earum commodi hic doloribus quod!</p>
            </div>

            <div className='education profileSection'>
                <div className='profileSection-header'>
                    <h2>Educación</h2>
                    <Icon icon='akar-icons:plus' color='#406bc8' className='icon'/>
                </div>
                <EducationRecord />
            </div>

            <div className='experience profileSection'>
                <div className='profileSection-header'>
                    <h2>Experiencia laboral</h2>
                    <Icon icon='akar-icons:plus' color='#406bc8' className='icon'/>
                </div>
                <ExperienceRecord />
            </div>

            <div className='interests profileSection'>
                <div className='profileSection-header'>
                    <h2>Intereses</h2>
                    <Icon icon='akar-icons:plus' color='#406bc8' className='icon'/>
                </div>
                <InterestsRecord />
            </div>

            <div className='recomendations profileSection'>
                <div className='profileSection-header'>
                   <h2>Recomendaciones recibidas</h2>
                   <Icon icon='akar-icons:plus' color='#406bc8' className='icon'/>
                </div>
                <RecommendationsRecord />
            </div>

        </section>
    )
}