import SearchForm from './searchForm/SearchForm'
import JobRecord from './jobRecord/JobRecord'
import { useState } from 'react'

export default function SearchJobs() {

    const [jobs, setjobs] = useState([1,2,3])

    return (
        <section className='searchJobs'>

            <SearchForm />
            {jobs.map((job, i) => <JobRecord job='job' key={i} />)}

        </section>
    )
}