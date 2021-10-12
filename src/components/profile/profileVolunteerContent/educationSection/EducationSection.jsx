import { Icon } from '@iconify/react'
import { useState } from 'react'
import EducationRecord from './educationRecord/EducationRecord'
import NewEducationRecordModal from './newEducationRecordModal/NewEducationRecordModal'

export default function EducationSection() {

    const [educationRecords, setEducationRecords] = useState([
        {
            institution: 'UBA',
            title: 'Ingeniero civil',
            beginDate: '03-01-2011',
            endDate: '06-30-2017',
            clasification: 'Ciencias exactas',
            state: 'Completo'
        }
    ])

    const addNewEducationRecord = recordToAdd => setEducationRecords([...educationRecords, recordToAdd])
    const deleteEducationRecord = recordToDelete => setEducationRecords(educationRecords.filter(record => (record !== recordToDelete)))

    const [showNewEducationRecordModal, setShowNewEducationRecordModal] = useState(false)

    return (
        <div className='education profileSection'>
            <div className='profileSection-header'>
                <h2>Educación</h2>
                <Icon icon='akar-icons:plus' color='#406bc8' className='icon' onClick={() => setShowNewEducationRecordModal(true)}/>
            </div>

            {educationRecords.length > 0 ? 
                educationRecords.map((record, i) => <EducationRecord record={record} key={i} deleteEducationRecord={deleteEducationRecord} />)
                :
                'Aún no has cargado registros de educación.'
            }
            
            <NewEducationRecordModal showNewEducationRecordModal={showNewEducationRecordModal} setShowNewEducationRecordModal={setShowNewEducationRecordModal} addNewEducationRecord={addNewEducationRecord} educationRecords={educationRecords}/>
        </div>
    )
}