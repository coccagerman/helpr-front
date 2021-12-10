import { Icon } from '@iconify/react'
import { useState } from 'react'
import EditExperienceRecordModal from './editExperienceRecordModal/EditExperienceRecordModal'
import DeleteExperienceRecordModal from './deleteExperienceRecordModal/DeleteExperienceRecordModal'

export default function ExperienceRecord({ record, deleteExperienceRecord }) {

    const [showEditExperienceRecordModal, setShowEditExperienceRecordModal] = useState(false)
    const [showDeleteExperienceRecordModal, setShowDeleteExperienceRecordModal] = useState(false)

    return (
        <article className='experienceRecord'>
            <div className='icon-container'>
                <Icon icon='bx:bxs-edit' color='#406bc8' className='icon' onClick={() => setShowEditExperienceRecordModal(true)} />
                <Icon icon="fluent:delete-24-filled" color='#406bc8' className='icon' onClick={() => setShowDeleteExperienceRecordModal(true)} />
            </div>

            <div className='horizontal-container'>
                <div className='horizontal-division'>
                    <div className='record-data'>
                        <h3>Posición:</h3>
                        <p>{record.position}</p>
                    </div>
                    <div className='record-data'>
                        <h3>Empresa:</h3>
                        <p>{record.company}</p>
                    </div>
                </div>
                <div className='horizontal-division'>
                    <div className='record-data'>
                        <h3>Fecha inicio:</h3>
                        <p>{new Date(record.beginDate).toISOString().slice(0, 10)}</p>
                    </div>
                    <div className='record-data'>
                        <h3>Fecha fin:</h3>
                        <p>{new Date(record.endDate).toISOString().slice(0, 10)}</p>
                    </div>
                </div>
            </div>

            <div className='record-data work-description'>
                <h3>Descripción:</h3>
                <p>{record.description}</p>
            </div>

            <EditExperienceRecordModal showEditExperienceRecordModal={showEditExperienceRecordModal} setShowEditExperienceRecordModal={setShowEditExperienceRecordModal} record={record} />
            <DeleteExperienceRecordModal showDeleteExperienceRecordModal={showDeleteExperienceRecordModal} setShowDeleteExperienceRecordModal={setShowDeleteExperienceRecordModal} record={record} />
        </article>
    )
}