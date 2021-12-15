import { Icon } from '@iconify/react'
import { useState } from 'react'
import EditEducationRecordModal from './editEducationRecordModal/EditEducationRecordModal'
import DeleteEducationRecordModal from './deleteEducationRecordModal/DeleteEducationRecordModal'

export default function EducationRecord({record}) {

    const [showEditEducationRecordModal, setShowEditEducationRecordModal] = useState(false)
    const [showDeleteEducationRecordModal, setShowDeleteEducationRecordModal] = useState(false)

    return (
        <article className='educationRecord'>
            <div className='icon-container'>
                <Icon icon='bx:bxs-edit' color='#406bc8' className='icon' onClick={() => setShowEditEducationRecordModal(true)} />
                <Icon icon="fluent:delete-24-filled" color='#406bc8' className='icon' onClick={() => setShowDeleteEducationRecordModal(true)} />
            </div>

            <div className='horizontal-container'>
                <div className='horizontal-division'>
                    <div className='record-data'>
                        <h3>Institución:</h3>
                        <p>{record.institution ? record.institution : null}</p>
                    </div>
                    <div className='record-data'>
                        <h3>Título:</h3>
                        <p>{record.title ? record.title : null}</p>
                    </div>
                    <div className='record-data'>
                        <h3>Clasificación:</h3>
                        <p>{record.classification ? record.classification : null}</p>
                    </div>

                    <div className='record-data'>
                        <h3>Estado:</h3>
                        <p>{record.state ? record.state : null}</p>
                    </div>
                </div>
                <div className='horizontal-division'>
                    <div className='record-data'>
                        <h3>Fecha inicio:</h3>
                        <p>{record.beginDate ? new Date(record.beginDate).toISOString().slice(0, 10) : null}</p>
                        
                    </div>
                    <div className='record-data'>
                        <h3>Fecha fin:</h3>
                        <p>{record.endDate ? new Date(record.endDate).toISOString().slice(0, 10): null}</p>
                    </div>
                </div>
            </div>

            <EditEducationRecordModal showEditEducationRecordModal={showEditEducationRecordModal} setShowEditEducationRecordModal={setShowEditEducationRecordModal} record={record} />
            <DeleteEducationRecordModal showDeleteEducationRecordModal={showDeleteEducationRecordModal} setShowDeleteEducationRecordModal={setShowDeleteEducationRecordModal} record={record} />
        </article>
    )
}