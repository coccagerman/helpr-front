import Logo from '../../../assets/logo.png'
import Illustration from '../../../assets/illustration.png'

export default function Hero() {
    return (
        <section className='hero'>
            <img src={Logo} alt='Logo.' className='helperLogo'/>

            <div className='txtAndImg-container'>
                <div className='txt'>
                    <article className='txt-organization'>
                        <h3>Sos una organización?</h3>
                        <p>Encontrá voluntarios que colaboren con tu proyecto!</p>
                    </article>
                    
                    <article className='txt-volunteer'>
                        <h3>Sos voluntario?</h3>
                        <p>Colaborá con organizaciones para adquirir experiencia laboral y/o apoyar proyectos sociales!</p>
                    </article>
                </div>

                {<img src={Illustration} alt='Illustration.' />}
            </div>

        </section>
    )
}