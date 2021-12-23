import { Icon } from '@iconify/react'
import { useState } from 'react'
import EditJobRecordModal from './editJobRecordModal/EditJobRecordModal'
import DeleteJobRecordModal from './deleteJobRecordModal/DeleteJobRecordModal'

export default function JobRecord ({record}) {

    const [showEditJobRecordModal, setShowEditJobRecordModal] = useState(false)
    const [showDeleteJobRecordModal, setShowDeleteJobRecordModal] = useState(false)

    return (
        <article className='jobRecord'>
            <div className='icon-container'>
                <Icon icon='bx:bxs-edit' color='#406bc8' className='icon' onClick={() => setShowEditJobRecordModal(true)} />
                <Icon icon="fluent:delete-24-filled" color='#406bc8' className='icon' onClick={() => setShowDeleteJobRecordModal(true)} />
            </div>

            <div className='horizontal-container'>
                <div className='horizontal-division'>
                    <div className='record-data'>
                        <h3>Posición:</h3>
                        <p>{record.position ? record.position : null}</p>
                    </div>

                    <div className='record-data'>
                        <h3>Clasificación:</h3>
                        <p>{record.classification ? record.classification : null}</p>
                    </div>
                </div>

                <div className='horizontal-division'>
                    <div className='record-data'>
                        <h3>Fecha de publicación:</h3>
                        <p>{record.publishedDate ? new Date(record.publishedDate).toISOString().slice(0, 10) : null}</p>
                    </div>

                    <div className='record-data'>
                        <h3>Dedicación horaria:</h3>
                        <p>{record.hourDedication ? record.hourDedication : null}</p>
                    </div>

                    <div className='record-data'>
                        <h3>Duración del proyecto:</h3>
                        <p>{record.projectDuration ? record.projectDuration : null}</p>
                    </div>
                </div>
            </div>

            <div className='record-data'>
                <h3>Detalle:</h3>
                <p>{record.detail ? record.detail : null}</p>
            </div>

            <div className='record-data'>
                <h3>Requisitos:</h3>
                <p>{record.requisites ? record.requisites : null}</p>
            </div>

            <div className='record-data candidates'>
                <h3>Candidatos postulados:</h3>
                <p>{record.candidates ? record.candidates.length : null}</p>
                {(record.candidates && record.candidates.length > 0) ? <a href={`/jobPanel/${record._id}`}>Ver candidatos</a> : null}
            </div>
            

            <EditJobRecordModal showEditJobRecordModal={showEditJobRecordModal} setShowEditJobRecordModal={setShowEditJobRecordModal} record={record} />
            <DeleteJobRecordModal showDeleteJobRecordModal={showDeleteJobRecordModal} setShowDeleteJobRecordModal={setShowDeleteJobRecordModal} record={record} />
        </article>
    )
}