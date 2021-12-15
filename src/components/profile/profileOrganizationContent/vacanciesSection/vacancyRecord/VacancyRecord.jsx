import { Icon } from '@iconify/react'
import { useState } from 'react'
import EditVacancyRecordModal from './editVacancyRecordModal/EditVacancyRecordModal'
import DeleteVacancyRecordModal from './deleteVacancyRecordModal/DeleteVacancyRecordModal'

export default function VacancyRecord ({record}) {

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

            <EditVacancyRecordModal showEditVacancyRecordModal={showEditVacancyRecordModal} setShowEditVacancyRecordModal={setShowEditVacancyRecordModal} record={record} />
            <DeleteVacancyRecordModal showDeleteVacancyRecordModal={showDeleteVacancyRecordModal} setShowDeleteVacancyRecordModal={setShowDeleteVacancyRecordModal} record={record} />
        </article>
    )
}