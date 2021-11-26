import { Link } from 'react-router-dom'

export default function JobRecord() {

    return (
        <article className='jobRecord'>
            <h2>Front end developer</h2>
            <h3>MercadoPrivado</h3>

            <div className='horizontalDivision'>
                <div className='details'>
                    <p><span>Clasificación:</span> Desarrollo de software</p>
                    <p><span>Dedicación horaria:</span> Part time</p>
                    <p><span>Duración del proyecto:</span> 3 semanas</p>
                    <p><span>Fecha de publicación:</span> 24/11/2021</p>
                </div>

                <Link to='/jobDetail'><button className='btn btn-secondary'>Postular</button></Link>
            </div>
        </article>
    )
}