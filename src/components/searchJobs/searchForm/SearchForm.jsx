export default function SearchForm() {

    return (
        <form>

            <div className='form-input nameSearch'>
                <label htmlFor='name'>Nombre de posición u organización</label>
                <input type='text' />
            </div>

            <div className='secondaryInputs'>
                <div className='form-input'>
                    <label htmlFor='classification'>Clasificación</label>
                    <select name='classification' id='classification'>
                        <option value=''></option>
                        <option value='software'>Desarrollo de software</option>
                        <option value='design'>Diseño e ilustración</option>
                        <option value='education'>Educación</option>
                        <option value='writtingAndTranslation'>Redacción de contenido y traducción</option>
                        <option value='audioAndvideo'>Edición de audio y video</option>
                        <option value='marketing'>Marketing</option>
                        <option value='data'>Análisis y presentación de datos</option>
                    </select>
                </div>

                <div className='form-input'>
                    <label htmlFor='publishedDate'>Fecha de publicación</label>
                    <select name='publishedDate' id='publishedDate'>
                        <option value=''></option>
                        <option value='3'>Últimos 3 días</option>
                        <option value='7'>Últimos 7 días</option>
                        <option value='15'>Últimos 15 días</option>
                        <option value='30'>Últimos 30 días</option>
                    </select>
                </div>

                <div className='form-input'>
                    <label htmlFor='neededDedication'>Dedicación horaria</label>
                    <select name='neededDedication' id='neededDedication'>
                        <option value=''></option>
                        <option value='partTime'>Part time</option>
                        <option value='fullTime'>Full time</option>
                    </select>
                </div>

                <div className='form-input'>
                    <label htmlFor='projectDuration'>Duración del proyecto</label>
                    <select name='projectDuration' id='projectDuration'>
                        <option value=''></option>
                        <option value='partTime'>Menos de 3 días</option>
                        <option value='fullTime'>De 4 a 10 días</option>
                        <option value='fullTime'>De 11 a 20 días</option>
                        <option value='fullTime'>De 21 a 3 meses</option>
                        <option value='fullTime'>Más de 3 meses</option>
                    </select>
                </div>

                <div className='form-input'>
                    <label htmlFor='projectDuration'>Filtrar por intereses del publicante</label>
                    <select name='projectDuration' id='projectDuration'>
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

            <button type='submit' className='btn btn-primary'>Buscar</button>

        </form>
    )
}