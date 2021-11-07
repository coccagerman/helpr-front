import { useState } from 'react'
import DeleteInterestRecordModal from '../deleteInterestRecordModal/DeleteInterestRecordModal'

export default function InterestRecord({record, deleteInterestRecord}) {

    const [showDeleteInterestRecordModal, setShowDeleteInterestRecordModal] = useState(false)

    return (
        <article className='interestRecord'>
            {record}
            <div className='deleteInterestRecord-btn' onClick={() => setShowDeleteInterestRecordModal(true)}>X</div>

            <DeleteInterestRecordModal showDeleteInterestRecordModal={showDeleteInterestRecordModal} setShowDeleteInterestRecordModal={setShowDeleteInterestRecordModal} record={record} deleteInterestRecord={deleteInterestRecord} />
        </article>
    )
}