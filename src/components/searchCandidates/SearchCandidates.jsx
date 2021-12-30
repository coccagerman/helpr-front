import { useEffect, useState, useContext } from 'react'
import AuthenticationContext from '../../context/AuthenticationContext'
import Pagination from 'react-bootstrap/Pagination'
import SearchForm from './searchForm/SearchForm'
import CandidateRecord from './candidateRecord/CandidateRecord'

export default function SearchCandidates() {

    const { checkIfNotAuthenticatedAndRedirect, checkIfNotOrganizationAndRedirect } = useContext(AuthenticationContext)

    const [candidateSearchResults, setCandidateSearchResults] = useState(null)

    /* FIX - Name serch could be handled with elastic search? */
    const [textSearch, setTextSearch] = useState(null)
    const [educationClassification, setEducationClassification] = useState(null)
    const [educationState, setEducationState] = useState(null)
    const [interests, setInterests] = useState(null)

    const [resultsRecordsPerPage, setResultsRecordsPerPage] = useState(10)
    const [resultsPage, setResultsPage] = useState(1)
    const [resultsTotalPages, setResultsTotalPages] = useState(null)
    const [totalResults, setTotalResults] = useState(null)
    /* const [resultsNextPage, setResultsNextPage] = useState(null)
    const [resultsPreviousPage, setResultsPreviousPage] = useState(null) */

    const fetchCandidateSearchResults = async searchParams => {
        const accessToken = localStorage.getItem('accessToken')
        const serverUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVSERVER_URL : process.env.REACT_APP_PRODSERVER_URL

        /* We only keep in searchParamsObject the properties that !null */
        for (let key in searchParams) {if (!searchParams[key]) delete searchParams[key]}

        const requestBody = !educationClassification && !educationState && !interests ?
            {
                recordsPerPage: resultsRecordsPerPage,
                page: resultsPage
            }
            :
            {
                recordsPerPage: resultsRecordsPerPage,
                page: resultsPage,
                searchParams: searchParams
            }

        const response = await fetch(`${serverUrl}/candidates/searchCandidatesWithParams`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            },
            body: JSON.stringify(requestBody)
        })

        const data = await response.json()

        setCandidateSearchResults(data.results)
        setResultsTotalPages(data.totalPages)
        setTotalResults(data.totalResults)
    }

    useEffect(() => {
        checkIfNotAuthenticatedAndRedirect()
        checkIfNotOrganizationAndRedirect()
        fetchCandidateSearchResults()
    }, [])

    useEffect(() => fetchCandidateSearchResults({
        educationClassification,
        educationState,
        interests
    }), [resultsPage])

    const paginationItems = []
    if (resultsTotalPages > 1) {
        for (let pageNumber = 1; pageNumber <= resultsTotalPages; pageNumber++) {
            paginationItems.push(
                <Pagination.Item key={pageNumber} active={pageNumber === resultsPage} onClick={() => setResultsPage(pageNumber)}>
                    {pageNumber}
                </Pagination.Item>
            )
          }
    }

    return (
        <section className='searchJobs'>

            <SearchForm
                fetchCandidateSearchResults={fetchCandidateSearchResults}
                textSearch={textSearch}
                setTextSearch={setTextSearch}
                educationClassification={educationClassification}
                setEducationClassification={setEducationClassification}
                educationState={educationState}
                setEducationState={setEducationState}
                interests={interests}
                setInterests={setInterests}
                resultsRecordsPerPage={resultsRecordsPerPage}
                setResultsRecordsPerPage={setResultsRecordsPerPage}
                setResultsPage={setResultsPage}
            />

            <div className='candidateRecord-container'>
                {candidateSearchResults && candidateSearchResults.length > 0 ?
                    <>
                        <p>{`Se encontraron ${totalResults} resultados`}</p>
                        {candidateSearchResults.map(candidate => <CandidateRecord candidate={candidate} key={candidate._id} />)}
                    </>
                    :
                    <p className='emptySearch-msg'>No se encontraron candidatos con las condiciones detalladas.</p>
                }
            </div>
            
            {resultsTotalPages && resultsTotalPages > 1 ?
                <div className='pagination-container'>
                    <Pagination className='pagination'>{paginationItems}</Pagination>
                </div>
                :
                null
            }
        </section>
    )
}