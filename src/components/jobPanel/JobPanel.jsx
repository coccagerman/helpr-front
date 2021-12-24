import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CandidateRecord from './candidateRecord/CandidateRecord'

export default function JobPanel() {

    const { jobRecordId } = useParams()
    const [jobDetailData, setJobDetailData] = useState(null)

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
        <section className='jobPanel'>
            {jobDetailData ?
                <>
                    <div className='titleAndSearchForm'>
                        <h1>{jobDetailData.position ? jobDetailData.position : null}</h1>
                        {(jobDetailData.candidates && jobDetailData.candidates.length > 0) ? <p className='appliedCandidates'>Candidatos postulados: {jobDetailData.candidates.length}</p> : null}
                        <form>
                            <div className='inputs-container'>
                                <div className='formInput'>
                                    <label htmlFor='textSearch'>Buscar por texto</label>
                                    <input type='text' name='textSearch' id='textSearch' />
                                </div>

                                <div className='formInput'>
                                    <label htmlFor='paginationResults'>Cantidad de resultados</label>
                                    <select name='paginationResults' id='paginationResults'>
                                        <option value='20'>20</option>
                                        <option value='50'>50</option>
                                        <option value='100'>100</option>
                                    </select>
                                </div>
                                
                                <div className='formInput'>
                                    <label htmlFor='state'>Estado</label>
                                    <select name='state' id='state'>
                                        <option value='Todos'>Todos</option>
                                        <option value='Pendiente de revisión'>Pendiente de revisión</option>
                                        <option value='Rechazado'>Rechazado</option>
                                    </select>
                                </div>
                            </div>

                            <button className='btn btn-primary'>Buscar</button>
                        </form>
                    </div>

                    <div className='candidates-container'>
                        {(jobDetailData.candidates && jobDetailData.candidates.length > 0) ?
                            jobDetailData.candidates.map(candidate => <CandidateRecord key={candidate.id} candidate={candidate} jobRecordId={jobRecordId} fetchJobDetailData={fetchJobDetailData} />)
                            : null
                        }
                    </div>
                </>
                :
                null
            }
        </section>
    )
}