import { Icon } from '@iconify/react'

export default function ExperienceRecord({ exp, setShowExperienceRecordModal, setExperienceRecordModalContent, setExperienceRecordModalType }) {
    return (
        <article className='experienceRecord'>
            <div className='icon-container'>
                <Icon icon='bx:bxs-edit' color='#406bc8' className='icon' onClick={() => {
                    setExperienceRecordModalContent(exp)
                    setExperienceRecordModalType('edit')
                    setShowExperienceRecordModal(true)
                }} />

                <Icon icon="fluent:delete-24-filled" color='#406bc8' className='icon' onClick={() => {
                    setExperienceRecordModalContent(exp)
                    setExperienceRecordModalType('delete')
                    setShowExperienceRecordModal(true)
                }} />
            </div>

            <div className='horizontal-container'>
                <div className='horizontal-division'>
                    <div className='record-data'>
                        <h3>Posición:</h3>
                        <p>{exp.position}</p>
                    </div>
                    <div className='record-data'>
                        <h3>Empresa:</h3>
                        <p>{exp.company}</p>
                    </div>
                </div>
                <div className='horizontal-division'>
                    <div className='record-data'>
                        <h3>Fecha inicio:</h3>
                        <p>{exp.beginDAte}</p>
                    </div>
                    <div className='record-data'>
                        <h3>Fecha fin:</h3>
                        <p>{exp.endDate}</p>
                    </div>
                </div>
            </div>

            <div className='record-data work-description'>
                <h3>Descripción:</h3>
                <p>{exp.description}</p>
            </div>
        </article>
    )
}