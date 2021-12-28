import { useState } from 'react'

export default function SearchForm({ fetchJobSearchResults, position, setPosition, classification, setClassification, publishedDate, setPublishedDate, hourDedication, sethourDedication, projectDuration, setProjectDuration, publisherInterests, setPublisherInterests, resultsRecordsPerPage, setResultsRecordsPerPage, setResultsPage }) {

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
                        <option value='1'>Ayer</option>
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
                    <select name='publisherInterests' id='publisherInterests' defaultValue={publisherInterests} onChange={e => setPublisherInterests(e.target.value)}>
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

                <div className='form-input'>
                    <label htmlFor='resultsPagination'>Resultados por página</label>
                    <select name='resultsPagination' id='resultsPagination' defaultValue={resultsRecordsPerPage} onChange={e => setResultsRecordsPerPage(e.target.value)}>
                        <option value='10'>10</option>
                        <option value='25'>25</option>
                        <option value='50'>50</option>
                        <option value='100'>100</option>
                    </select>
                </div>
            </div>

            <button type='submit' className='btn btn-primary' onClick={e => {
                e.preventDefault()
                setResultsPage(1)
                fetchJobSearchResults({
                    classification,
                    hourDedication,
                    projectDuration
                })
            }}>Buscar</button>
        </form>
    )
}