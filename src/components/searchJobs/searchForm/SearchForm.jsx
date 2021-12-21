import { useState } from 'react'

export default function SearchForm({ setJobSearchResults }) {

    /* FIX - Name serch could be handled with elastic search? */
    const [position, setPosition] = useState(null)
    const [classification, setClassification] = useState(null)
    const [publishedDate, setPublishedDate] = useState(null)
    const [hourDedication, sethourDedication] = useState(null)
    const [projectDuration, setProjectDuration] = useState(null)
    const [publisherInterestsSearch, setPublisherInterestsSearch] = useState(null)

    /* FIX - implementar filtros por fecha de publicación e intereses del publicante */

    const fetchJobSearchResultsWithParams = async searchParams => {
        const accessToken = localStorage.getItem('accessToken')
        /* We only keep in searchParamsObject the properties that !null */
        for (let key in searchParams) {if (!searchParams[key]) delete searchParams[key]}

        const response = await fetch('http://localhost:3001/jobs/searchJobsWithParams', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            },
            body: JSON.stringify({'searchParams': searchParams})
        })

        const data = await response.json()
        setJobSearchResults(data)
        
        console.log('response')
        console.log(response)
        console.log('data')
        console.log(data)
        console.log('searchParams')
        console.log(searchParams)
    }

    return (
        <form className='searchForm'>
            <div className='form-input nameSearch'>
                <label htmlFor='name'>Nombre de posición u organización</label>
                <input type='text' defaultValue={position} onChange={e => setPosition(e.target.value)}/>
            </div>

            <div className='secondaryInputs'>
                <div className='form-input'>
                    <label htmlFor='classification'>Clasificación</label>
                    <select name='classification' id='classification' defaultValue={classification} onChange={e => setClassification(e.target.value)}>
                        <option value=''></option>
                        <option value='Desarrollo de software'>Desarrollo de software</option>
                        <option value='Diseño e ilustración'>Diseño e ilustración</option>
                        <option value='Educación'>Educación</option>
                        <option value='Redacción de contenido y traducción'>Redacción de contenido y traducción</option>
                        <option value='Edición de audio y video'>Edición de audio y video</option>
                        <option value='Marketing'>Marketing</option>
                        <option value='Análisis y presentación de datos'>Análisis y presentación de datos</option>
                        <option value='Otro'>Otro</option>
                    </select>
                </div>

                <div className='form-input'>
                    <label htmlFor='publishedDate'>Fecha de publicación</label>
                    <select name='publishedDate' id='publishedDate' defaultValue={publishedDate} onChange={e => setPublishedDate(e.target.value)}>
                        <option value=''></option>
                        <option value='3'>Últimos 3 días</option>
                        <option value='7'>Últimos 7 días</option>
                        <option value='15'>Últimos 15 días</option>
                        <option value='30'>Últimos 30 días</option>
                    </select>
                </div>

                <div className='form-input'>
                    <label htmlFor='neededDedication'>Dedicación horaria</label>
                    <select name='neededDedication' id='neededDedication' defaultValue={projectDuration} onChange={e => sethourDedication(e.target.value)}>
                        <option value=''></option>
                        <option value='Part time'>Part time</option>
                        <option value='Full time'>Full time</option>
                    </select>
                </div>

                <div className='form-input'>
                    <label htmlFor='projectDuration'>Duración del proyecto</label>
                    <select name='projectDuration' id='projectDuration' defaultValue={hourDedication} onChange={e => setProjectDuration(e.target.value)}>
                        <option value=''></option>
                        <option value='Menos de 3 días'>Menos de 3 días</option>
                        <option value='De 4 a 10 días'>De 4 a 10 días</option>
                        <option value='De 11 a 20 días'>De 11 a 20 días</option>
                        <option value='De 21 días a 3 meses'>De 21 días a 3 meses</option>
                        <option value='Más de 3 meses'>Más de 3 meses</option>
                    </select>
                </div>

                <div className='form-input'>
                    <label htmlFor='publisherInterests'>Intereses del publicante</label>
                    <select name='publisherInterests' id='publisherInterests' defaultValue={publisherInterestsSearch} onChange={e => setPublisherInterestsSearch(e.target.value)}>
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
                fetchJobSearchResultsWithParams({
                    position,
                    classification,
                    publishedDate,
                    hourDedication,
                    projectDuration,
                    publisherInterestsSearch
                })
            }}>Buscar</button>
        </form>
    )
}