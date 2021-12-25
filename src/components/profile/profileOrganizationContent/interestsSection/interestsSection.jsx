import { useContext } from 'react'
import ProfileContext from '../../../../context/ProfileContext'
import InterestRecord from './interestRecord/InterestRecord'

export default function InterestsSection() {

    const { userProfileData } = useContext(ProfileContext)

    return (
        <div className='interests profileSection'>
            <div className='profileSection-header'>
                <h2>Intereses</h2>
            </div>

            <div className='interests-container'>
                {(userProfileData.basic.interests && userProfileData.basic.interests.length > 0) ? 
                    userProfileData.basic.interests.map((record, i) => <InterestRecord record={record} key={i} />)
                    :
                    'El usuario no ha cargado registros de intereses.'
                }
            </div>
        </div>
    )
}