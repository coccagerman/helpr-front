import { useEffect, useState, useContext } from 'react'
import AuthenticationContext from '../../context/AuthenticationContext'
import ProfileContext from '../../context/ProfileContext'
import Pagination from 'react-bootstrap/Pagination'
import SearchForm from './searchForm/SearchForm'
import JobRecord from './jobRecord/JobRecord'

export default function SearchJobs() {

    const { checkIfNotAuthenticatedAndRedirect, checkIfNotVolunteerAndRedirect } = useContext(AuthenticationContext)
    const { profileData, fetchProfileData } = useContext(ProfileContext)

    const [jobSearchResults, setJobSearchResults] = useState(null)

    const [textSearch, setTextSearch] = useState(null)
    const [classification, setClassification] = useState(null)
    const [publishedDate, setPublishedDate] = useState(null)
    const [hourDedication, sethourDedication] = useState(null)
    const [projectDuration, setProjectDuration] = useState(null)
    const [publisherInterests, setPublisherInterests] = useState(null)

    const [resultsRecordsPerPage, setResultsRecordsPerPage] = useState(10)
    const [resultsPage, setResultsPage] = useState(1)
    const [resultsTotalPages, setResultsTotalPages] = useState(null)
    const [totalResults, setTotalResults] = useState(null)
    /* const [resultsNextPage, setResultsNextPage] = useState(null)
    const [resultsPreviousPage, setResultsPreviousPage] = useState(null) */

    const fetchJobSearchResults = async searchParams => {
        const accessToken = localStorage.getItem('accessToken')
        const serverUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVSERVER_URL : process.env.REACT_APP_PRODSERVER_URL

        /* We only keep in searchParamsObject the properties that !null */
        for (let key in searchParams) {if (!searchParams[key]) delete searchParams[key]}

        const requestBody = {
            recordsPerPage: resultsRecordsPerPage,
            page: resultsPage,
            searchParams: searchParams
        }

        if (textSearch) requestBody.searchTextSearchParam = textSearch
        if (publisherInterests) requestBody.searchPublisherInterestsParam = publisherInterests
        if (publishedDate) requestBody.searchPublishedDateParam = publishedDate

        const response = await fetch(`${serverUrl}/jobs/searchJobsWithParams`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            },
            body: JSON.stringify(requestBody)
        })

        const data = await response.json()

        setJobSearchResults(data.results)
        setResultsTotalPages(data.totalPages)
        setTotalResults(data.totalResults)
    }

    useEffect(() => {
        checkIfNotAuthenticatedAndRedirect()
        checkIfNotVolunteerAndRedirect()
        fetchProfileData()
        fetchJobSearchResults({
            classification,
            hourDedication,
            projectDuration
        })
    }, [])

    useEffect(() => fetchJobSearchResults({
        classification,
        hourDedication,
        projectDuration
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
                fetchJobSearchResults={fetchJobSearchResults}
                textSearch={textSearch}
                setTextSearch={setTextSearch}
                classification={classification}
                setClassification={setClassification}
                publishedDate={publishedDate}
                setPublishedDate={setPublishedDate}
                hourDedication={hourDedication}
                sethourDedication={sethourDedication}
                projectDuration={projectDuration}
                setProjectDuration={setProjectDuration}
                publisherInterests={publisherInterests}
                setPublisherInterests={setPublisherInterests}
                resultsRecordsPerPage={resultsRecordsPerPage}
                setResultsRecordsPerPage={setResultsRecordsPerPage}
                setResultsPage={setResultsPage}
            />

            {profileData && jobSearchResults && jobSearchResults.length > 0 ?
                <>
                    <p className='totalResults'>{`Se encontraron ${totalResults} resultados`}</p>
                    {jobSearchResults.map(record => <JobRecord record={record} key={record._id} alreadyApplied={ profileData.appliedJobs.indexOf(record._id) !== -1 } />)}
                </>
                :
                <p className='emptySearch-msg'>No se encontraron vacantes con las condiciones detalladas.</p>
            }

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