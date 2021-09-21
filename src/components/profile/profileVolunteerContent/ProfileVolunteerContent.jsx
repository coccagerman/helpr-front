import ProfilePic from '../../../assets/mockProfilePic.jpg'

export default function ProfileVolunteerContent() {
    return (
        <section className='profileVolunteerContent'>

            <div className='header'>
                <img src={ProfilePic} alt='Profile' />
                <h1>Germán cocca</h1>
                <p>Full stack developer</p>
            </div>

            <div className='education'>
                <h2>Educación</h2>
            </div>

            <div className='workExperience'>
                <h2>Experiencia laboral</h2>
            </div>

            <div className='interests'>
                <h2>Intereses</h2>
            </div>

            <div className='volunteeringExperience'>
                <h2>Experiencias de voluntariado</h2>
            </div>

        </section>
    )
}