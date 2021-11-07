import ProfileVolunteerContent from './profileVolunteerContent/ProfileVolunteerContent'
import ProfileOrganizationContent from './profileOrganizationContent/ProfileOrganizationContent'

export default function Profile() {
    return (
        <section className='profile'>
            <ProfileVolunteerContent/>
            {/* <ProfileOrganizationContent/> */}
        </section>
    )
}