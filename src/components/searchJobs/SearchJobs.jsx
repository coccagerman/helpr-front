import SearchForm from './searchForm/SearchForm'
import JobRecord from './jobRecord/JobRecord'
import { useEffect, useState } from 'react'

export default function SearchJobs() {

    const [jobSearchResults, setJobSearchResults] = useState([])

    const fetchJobSearchResults = async () => {
        const accessToken = localStorage.getItem('accessToken')

        const response = await fetch('http://localhost:3001/jobs', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            }
        })

        const data = await response.json()
        setJobSearchResults(data)
    }

    useEffect(() => fetchJobSearchResults(), [])

    return (
        <section className='searchJobs'>

            <SearchForm />
            {jobSearchResults.map(record => <JobRecord record={record} key={record._id} />)}

        </section>
    )
}