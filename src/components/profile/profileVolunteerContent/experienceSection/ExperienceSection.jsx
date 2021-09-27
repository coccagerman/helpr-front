import { Icon } from '@iconify/react'
import { useState } from 'react'
import ExperienceRecord from './experienceRecord/ExperienceRecord'
import ExperienceRecordModal from './experienceRecordModal/ExperienceRecordModal'

export default function ExperienceSection() {

    const [showExperienceRecordModal, setShowExperienceRecordModal] = useState(false)
    const [experienceRecordModalContent, setExperienceRecordModalContent] = useState(false)
    const [experienceRecordModalType, setExperienceRecordModalType] = useState('delete')

    /* This will be replaced with db data and db calls. */
    const [mockExperiences, setMockExperiences] = useState([
        {
            position: 'Lorem1',
            company: 'Lorem1',
            beginDate: '01/01/1920',
            endDate: '01/01/1925',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio odit blanditiis numquam velit mollitia, pariatur quam impedit deserunt earum corporis laboriosam magni provident minus nam incidunt nulla.'
        },
        {
            position: 'Lorem2',
            company: 'Lorem2',
            beginDate: '01/01/1930',
            endDate: '01/01/1935',
            description: 'Lorem ipsum dolor sit amet consectetur pariatur quam impedit deserunt earum corporis laboriosam magni provident minus nam incidunt nulla.'
        }
    ])
    /*  */

    return (
        <div className='experience profileSection'>
            <div className='profileSection-header'>
                <h2>Experiencia</h2>
                <Icon icon='akar-icons:plus' color='#406bc8' className='icon' onClick={() => {
                    setExperienceRecordModalType('create')
                    setShowExperienceRecordModal(true)
                }}/>
            </div>

            {mockExperiences.map((exp, i) => <ExperienceRecord exp={exp} key={i} setShowExperienceRecordModal={setShowExperienceRecordModal} setExperienceRecordModalContent={setExperienceRecordModalContent} setExperienceRecordModalType={setExperienceRecordModalType} />)}

            <ExperienceRecordModal showExperienceRecordModal={showExperienceRecordModal} setShowExperienceRecordModal={setShowExperienceRecordModal} experienceRecordModalContent={experienceRecordModalContent} experienceRecordModalType={experienceRecordModalType} mockExperiences={mockExperiences} setMockExperiences={setMockExperiences} />
        </div>
    )
}