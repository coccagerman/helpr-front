import { Icon } from '@iconify/react'
import { useState } from 'react'
import EditVacancyRecordModal from '../editVacancyRecordModal/EditVacancyRecordModal'
import DeleteVacancyRecordModal from '../deleteVacancyRecordModal/DeleteVacancyRecordModal'

export default function VacancyRecord ({record, deleteVacancyRecord}) {

    const [showEditVacancyRecordModal, setShowEditVacancyRecordModal] = useState(false)
    const [showDeleteVacancyRecordModal, setShowDeleteVacancyRecordModal] = useState(false)

    return (
        <article className='vacancyRecord'>
            <div className='icon-container'>
                <Icon icon='bx:bxs-edit' color='#406bc8' className='icon' onClick={() => setShowEditVacancyRecordModal(true)} />
                <Icon icon="fluent:delete-24-filled" color='#406bc8' className='icon' onClick={() => setShowDeleteVacancyRecordModal(true)} />
            </div>

            <div className='horizontal-container'>
                <div className='horizontal-division'>
                    <div className='record-data'>
                        <h3>Posición:</h3>
                        <p>{record.position}</p>
                    </div>

                    <div className='record-data'>
                        <h3>Clasificación:</h3>
                        <p>{record.clasification}</p>
                    </div>
                </div>

                <div className='horizontal-division'>
                    <div className='record-data'>
                        <h3>Fecha inicio:</h3>
                        <p>{record.beginDate}</p>
                    </div>

                    <div className='record-data'>
                        <h3>Fecha fin:</h3>
                        <p>{record.endDate}</p>
                    </div>
                </div>
            </div>

            <div className='record-data'>
                <h3>Detalle:</h3>
                <p>{record.detail}</p>
            </div>

            <div className='record-data'>
                <h3>Requisitos:</h3>
                <p>{record.requisites}</p>
            </div>

            <EditVacancyRecordModal showEditVacancyRecordModal={showEditVacancyRecordModal} setShowEditVacancyRecordModal={setShowEditVacancyRecordModal} record={record} />
            <DeleteVacancyRecordModal showDeleteVacancyRecordModal={showDeleteVacancyRecordModal} setShowDeleteVacancyRecordModal={setShowDeleteVacancyRecordModal} record={record} deleteVacancyRecord={deleteVacancyRecord} />
        </article>
    )
}