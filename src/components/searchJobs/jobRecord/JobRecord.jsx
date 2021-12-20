import { Link } from 'react-router-dom'

export default function JobRecord({record}) {
    console.log(record)
    return (
        <article className='jobRecord-searchResult'>
            <h2>{record.position}</h2>
            <h3>{record.publisher.name}</h3>

            <div className='horizontalDivision'>
                <div className='details'>
                    <p><span>Clasificación:</span> {record.classification}</p>
                    <p><span>Dedicación horaria:</span> {record.hourDedication}</p>
                    <p><span>Duración del proyecto:</span> {record.projectDuration}</p>
                    <p><span>Fecha de publicación:</span> {new Date(record.publishedDate).toISOString().slice(0, 10)}</p>
                </div>

                <Link to={`/jobDetail/${record._id}`}><button className='btn btn-secondary'>Postular</button></Link>
            </div>
        </article>
    )
}

