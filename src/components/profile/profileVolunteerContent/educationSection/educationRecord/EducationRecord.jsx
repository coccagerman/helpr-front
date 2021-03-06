export default function EducationRecord({record}) {

    return (
        <article className='educationRecord'>

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

        </article>
    )
}