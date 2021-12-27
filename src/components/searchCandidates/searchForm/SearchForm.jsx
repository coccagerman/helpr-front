import { useState } from 'react'

export default function SearchForm({ setCandidateSearchResults }) {

    /* FIX - Name serch could be handled with elastic search? */
    const [textSearch, setTextSearch] = useState(null)
    const [educationClassification, setEducationClassification] = useState(null)
    const [educationState, setEducationState] = useState(null)
    const [interests, setInterests] = useState(null)

    const fetchCandidateSearchResultsWithParams = async searchParams => {
        const accessToken = localStorage.getItem('accessToken')
        /* We only keep in searchParamsObject the properties that !null */
        for (let key in searchParams) {if (!searchParams[key]) delete searchParams[key]}

        let requestBody = !educationClassification && !educationState && !interests ? [] : {searchParams: searchParams}

        const response = await fetch('http://localhost:3001/candidates/searchCandidatesWithParams', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            },
            body: JSON.stringify(requestBody)
        })

        const data = await response.json()
        console.log(data)
        setCandidateSearchResults(data)
    }

    return (
        <form className='searchForm'>
            <div className='form-input nameSearch'>
                <label htmlFor='name'>Buscar por texto</label>
                <input type='text' onChange={e => setTextSearch(e.target.value)}/>
            </div>

            <div className='secondaryInputs'>

                <div className='form-input'>
                    <label htmlFor='classification'>Educación - clasificación</label>
                    <select name='classification' required onChange={e => setEducationClassification(e.target.value)}>
                        <option value=''></option>
                        <option value='Ciencias sociales'>Ciencias sociales</option>
                        <option value='Ciencias exactas'>Ciencias exactas</option>
                        <option value='Ciencias naturales'>Ciencias naturales</option>
                        <option value='Ciencias económicas'>Ciencias económicas</option>
                        <option value='Otro'>Otro</option>
                    </select>
                </div>

                <div className='form-input'>
                    <label htmlFor='state'>Educación - estado</label>
                    <select name='state' required onChange={e => setEducationState(e.target.value)}>
                        <option value=''></option>
                        <option value='Completo'>Completo</option>
                        <option value='Abandonado'>Abandonado</option>
                        <option value='En curso'>En curso</option>
                    </select>
                </div>

                <div className='form-input'>
                    <label htmlFor='interests'>Intereses</label>
                    <select name='interests' id='interests' defaultValue={interests} onChange={e => setInterests(e.target.value)}>
                        <option value=''></option>
                        <option value='Arte'>Arte</option>
                        <option value='Cultura'>Cultura</option>
                        <option value='Data'>Data</option>
                        <option value='Deportes'>Deportes</option>
                        <option value='Economía'>Economía</option>
                        <option value='Educación'>Educación</option>
                        <option value='Idiomas'>Idiomas</option>
                        <option value='Marketing'>Marketing</option>
                        <option value='Política'>Política</option>
                        <option value='Tecnología'>Tecnología</option>
                    </select>
                </div>

            </div>

            <button type='submit' className='btn btn-primary' onClick={e => {
                e.preventDefault()
                fetchCandidateSearchResultsWithParams({
                    educationClassification,
                    educationState,
                    interests
                })
            }}>Buscar</button>
        </form>
    )
}