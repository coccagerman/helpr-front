import { Icon } from '@iconify/react'

export default function EducationRecord({ setShowEducationRecordModal }) {

    return (
        <article className='educationRecord'>
            <div className='icon-container'>
                <Icon icon='bx:bxs-edit' color='#406bc8' className='icon' onClick={() => setShowEducationRecordModal(true)} />
                <Icon icon="fluent:delete-24-filled" color='#406bc8' className='icon' onClick={() => setShowEducationRecordModal(true)} />
            </div>

            <div className='horizontal-container'>
                <div className='horizontal-division'>
                    <div className='record-data'>
                        <h3>Institución:</h3>
                        <p>Loremememe</p>
                    </div>
                    <div className='record-data'>
                        <h3>Título:</h3>
                        <p>Loremememe</p>
                    </div>
                    <div className='record-data'>
                        <h3>Clasificación:</h3>
                        <p>Ciencias sociales</p>
                    </div>
                </div>
                <div className='horizontal-division'>
                    <div className='record-data'>
                        <h3>Fecha inicio:</h3>
                        <p>1/2/1998</p>
                    </div>
                    <div className='record-data'>
                        <h3>Fecha fin:</h3>
                        <p>1/2/1998</p>
                    </div>
                </div>
            </div>

        </article>
    )
}