import { Icon } from '@iconify/react'
import { useState } from 'react'
import ExperienceRecord from './experienceRecord/ExperienceRecord'
import NewExperienceRecordModal from './newExperienceRecordModal/NewExperienceRecordModal'

export default function ExperienceSection() {

    /* This will be replaced with db data and db calls. */
    const [experienceRecords, setExperienceRecords] = useState([
        {
            position: 'Front end developer',
            company: 'Avature',
            beginDate: '01/08/2021',
            endDate: 'Actualidad',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio odit blanditiis numquam velit mollitia, pariatur quam impedit deserunt earum corporis laboriosam magni provident minus nam incidunt nulla.'
        }
    ])
    /*  */

    const addNewExperienceRecord = recordToAdd => setExperienceRecords([...experienceRecords, recordToAdd])
    const deleteExperienceRecord = recordToDelete => setExperienceRecords(experienceRecords.filter(record => (record !== recordToDelete)))

    const [showNewExperienceRecordModal, setShowNewExperienceRecordModal] = useState(false)

    return (
        <div className='experience profileSection'>
            <div className='profileSection-header'>
                <h2>Experiencia</h2>
                <Icon icon='akar-icons:plus' color='#406bc8' className='icon' onClick={() => {
                    setShowNewExperienceRecordModal(true)
                }}/>
            </div>
            
            {experienceRecords.length > 0 ? 
                experienceRecords.map((record, i) => <ExperienceRecord record={record} key={i} deleteExperienceRecord={deleteExperienceRecord} />)
                :
                'Aún no has cargado registros de experiencia.'
            }

            <NewExperienceRecordModal showNewExperienceRecordModal={showNewExperienceRecordModal} setShowNewExperienceRecordModal={setShowNewExperienceRecordModal} addNewExperienceRecord={addNewExperienceRecord} />
        </div>
    )
}