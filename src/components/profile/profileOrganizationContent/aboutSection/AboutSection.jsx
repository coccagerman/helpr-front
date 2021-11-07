import { Icon } from '@iconify/react'
import { useState } from 'react'
import AboutRecordModal from './aboutRecordModal/AboutRecordModal'

export default function AboutSection() {

    const [AboutRecord, setAboutRecord] = useState(null)

    const [showAboutRecordModal, setShowAboutRecordModal] = useState(false)

    return (
        <div className='about profileSection'>
            <div className='profileSection-header'>
                <h2>Sobre la organización</h2>
                <Icon icon='bx:bxs-edit' color='#406bc8' className='icon' onClick={() => setShowAboutRecordModal(true)} />
            </div>
            <p>{AboutRecord ? AboutRecord : 'Aún no completaste esta sección.'}</p>

            <AboutRecordModal showAboutRecordModal={showAboutRecordModal} setShowAboutRecordModal={setShowAboutRecordModal} AboutRecord={AboutRecord} setAboutRecord={setAboutRecord} />
        </div>
    )
}