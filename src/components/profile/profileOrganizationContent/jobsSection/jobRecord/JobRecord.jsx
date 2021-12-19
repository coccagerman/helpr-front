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
                        <h3>Fecha inicio del proyecto:</h3>
                        <p>{record.beginDate ? new Date(record.beginDate).toISOString().slice(0, 10) : null}</p>
                    </div>

                    <div className='record-data'>
                        <h3>Fecha fin del proyecto:</h3>
                        <p>{record.endDate ? new Date(record.endDate).toISOString().slice(0, 10) : null}</p>
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

            <div className='record-data'>
                <h3>Candidatos postulados:</h3>
                <p>3</p>
                <p>Ver candidatos</p>
            </div>

            <EditJobRecordModal showEditJobRecordModal={showEditJobRecordModal} setShowEditJobRecordModal={setShowEditJobRecordModal} record={record} />
            <DeleteJobRecordModal showDeleteJobRecordModal={showDeleteJobRecordModal} setShowDeleteJobRecordModal={setShowDeleteJobRecordModal} record={record} />
        </article>
    )
}