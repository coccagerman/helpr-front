import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function JobDetail() {

    const { jobRecordId } = useParams()

    const [jobDetailData, setJobDetailData] = useState([])

    const fetchJobDetailData = async () => {
        const accessToken = localStorage.getItem('accessToken')

        const response = await fetch(`http://localhost:3001/jobs/${jobRecordId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            }
        })

        const data = await response.json()
        setJobDetailData(data)
    }

    useEffect(() => fetchJobDetailData(), [])

    return (
        <section className='jobDetail'>

            <div className='titleAndPublisher'>
                <h1>{jobDetailData.position ? jobDetailData.position : null}</h1>
                <h2>{jobDetailData.publisher ? jobDetailData.publisher.name : null}</h2>
            </div>

            <div className='mainDetails'>
                <div>
                    <h3>Clasificación</h3>
                    <p>{jobDetailData.classification ? jobDetailData.classification : null}</p>

                    <h3>Fecha de publicación</h3>
                    <p>{jobDetailData.publishedDate ? new Date(jobDetailData.publishedDate).toISOString().slice(0, 10) : null}</p>
                </div>

                <div>
                    <h3>Tiempo estimado</h3>
                    <p>{jobDetailData.projectDuration ? jobDetailData.projectDuration : null}</p>

                    <h3>Dedicación horaria</h3>
                    <p>{jobDetailData.hourDedication ? jobDetailData.hourDedication : null}</p>
                </div>
            </div>

            <h3>Descripción</h3>
            <p>{jobDetailData.description ? jobDetailData.description : null}</p>

            <h3>Requisitos</h3>
            <p>{jobDetailData.requisites ? jobDetailData.requisites : null}</p>

            <button className='btn btn-primary'>Postular</button>

        </section>
    )
}