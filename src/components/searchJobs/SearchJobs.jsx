import { useEffect, useState, useContext } from 'react'
import AuthenticationContext from '../../context/AuthenticationContext'
import SearchForm from './searchForm/SearchForm'
import JobRecord from './jobRecord/JobRecord'

export default function SearchJobs() {

    const { checkIfNotAuthenticatedAndRedirect } = useContext(AuthenticationContext)

    const [jobSearchResults, setJobSearchResults] = useState(null)

    const fetchJobSearchResults = async () => {
        if (!jobSearchResults) {
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
    }

    useEffect(() => {
        checkIfNotAuthenticatedAndRedirect()
        fetchJobSearchResults()
    }, [])

    return (
        <section className='searchJobs'>

            <SearchForm setJobSearchResults={setJobSearchResults} />
            {jobSearchResults && jobSearchResults.map(record => <JobRecord record={record} key={record._id} />)}

        </section>
    )
}