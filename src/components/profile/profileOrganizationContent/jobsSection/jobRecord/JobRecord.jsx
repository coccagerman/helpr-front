import { Link } from 'react-router-dom'

export default function JobRecord ({record}) {

    return (
        <article className='jobRecord'>

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

                    <div className='record-data'>
                        <h3>Estado de la vacante:</h3>
                        <p>{record.isJobActive ? 'Activa' : 'Inactiva'}</p>
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

            <Link to={`/jobDetail/${record._id}`}><button className='btn btn-secondary'>Postular</button></Link>

        </article>
    )
}