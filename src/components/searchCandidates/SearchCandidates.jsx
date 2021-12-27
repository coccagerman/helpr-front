import { useEffect, useState, useContext } from 'react'
import AuthenticationContext from '../../context/AuthenticationContext'
import SearchForm from './searchForm/SearchForm'
import CandidateRecord from './candidateRecord/CandidateRecord'

export default function SearchCandidates() {

    const { checkIfNotAuthenticatedAndRedirect, checkIfNotOrganizationAndRedirect } = useContext(AuthenticationContext)

    const [candidateSearchResults, setCandidateSearchResults] = useState(null)

    const fetchCandidateSearchResults = async () => {
        if (!candidateSearchResults) {
            const accessToken = localStorage.getItem('accessToken')

            const response = await fetch('http://localhost:3001/candidates', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()
            setCandidateSearchResults(data)
        }
    }

    useEffect(() => {
        checkIfNotAuthenticatedAndRedirect()
        checkIfNotOrganizationAndRedirect()
        fetchCandidateSearchResults()
    }, [])

    return (
        <section className='searchJobs'>

            <SearchForm setCandidateSearchResults={setCandidateSearchResults} />

            <div className='candidateRecord-container'>
                {candidateSearchResults.length > 0 ?
                    <>
                    <p>{`Se encontraron ${candidateSearchResults.length} resultados`}</p>
                    {candidateSearchResults.map(candidate => <CandidateRecord candidate={candidate} key={candidate._id} />)}
                    </>
                    :
                    <p className='emptySearch-msg'>No se encontraron candidatos con las condiciones detalladas.</p>
                }
            </div>

        </section>
    )
}