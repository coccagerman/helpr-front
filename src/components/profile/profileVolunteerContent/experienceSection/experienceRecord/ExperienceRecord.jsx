export default function ExperienceRecord({ record }) {

    return (
        <article className='experienceRecord'>
            <div className='horizontal-container'>
                <div className='horizontal-division'>
                    <div className='record-data'>
                        <h3>Posición:</h3>
                        <p>{record.position ? record.position : null}</p>
                    </div>
                    <div className='record-data'>
                        <h3>Empresa:</h3>
                        <p>{record.company ? record.company : null}</p>
                    </div>
                </div>
                <div className='horizontal-division'>
                    <div className='record-data'>
                        <h3>Fecha inicio:</h3>
                        <p>{record.beginDate ? new Date(record.beginDate).toISOString().slice(0, 10) : null}</p>
                    </div>
                    <div className='record-data'>
                        <h3>Fecha fin:</h3>
                        <p>{record.endDate ? new Date(record.endDate).toISOString().slice(0, 10) : null}</p>
                    </div>
                </div>
            </div>

            <div className='record-data work-description'>
                <h3>Descripción:</h3>
                <p>{record.description ? record.description : null}</p>
            </div>
        </article>
    )
}