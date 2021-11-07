import { Icon } from '@iconify/react'
import { useState } from 'react'
import InterestRecord from './interestRecord/InterestRecord'
import NewInterestRecordModal from './newInterestRecordModal/NewInterestRecordModal'

export default function InterestsSection() {

    const [interestRecords, setInterestRecords] = useState([
        'Deportes', 'Educación', 'Tecnología'
    ])

    const addNewInterestRecord = recordToAdd => setInterestRecords([...interestRecords, recordToAdd])
    const deleteInterestRecord = recordToDelete => setInterestRecords(interestRecords.filter(record => (record !== recordToDelete)))

    const [showNewInterestRecordModal, setShowNewInterestRecordModal] = useState(false)

    return (
        <div className='interests profileSection'>
            <div className='profileSection-header'>
                <h2>Intereses</h2>
                <Icon icon='akar-icons:plus' color='#406bc8' className='icon' onClick={() => setShowNewInterestRecordModal(true)}/>
            </div>

            <div className='interests-container'>
            {interestRecords.length > 0 ? 
                interestRecords.map((record, i) => <InterestRecord record={record} key={i} deleteInterestRecord={deleteInterestRecord} />)
                :
                'Aún no has cargado registros de intereses.'
            }
            </div>

            <NewInterestRecordModal showNewInterestRecordModal={showNewInterestRecordModal} setShowNewInterestRecordModal={setShowNewInterestRecordModal} addNewInterestRecord={addNewInterestRecord} />
        </div>
    )
}