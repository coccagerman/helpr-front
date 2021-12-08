import { Icon } from '@iconify/react'
import { useContext, useState } from 'react'
import ProfileContext from '../../../../context/ProfileContext'
import AboutRecordModal from './aboutRecordModal/AboutRecordModal'

export default function AboutSection() {

    const { profileData } = useContext(ProfileContext)

    const [showAboutRecordModal, setShowAboutRecordModal] = useState(false)

    return (
        <div className='about profileSection'>
            <div className='profileSection-header'>
                <h2>Sobre mi</h2>
                <Icon icon='bx:bxs-edit' color='#406bc8' className='icon' onClick={() => setShowAboutRecordModal(true)} />
            </div>
            <p>{profileData.about ? profileData.about : 'Aún no completaste esta sección.'}</p>

            <AboutRecordModal showAboutRecordModal={showAboutRecordModal} setShowAboutRecordModal={setShowAboutRecordModal} />
        </div>
    )
}