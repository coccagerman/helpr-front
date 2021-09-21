import Hero from './hero/Hero'
import ComoFunciona from './comoFunciona/ComoFunciona'
import TiposDeProyectos from './tiposDeProyectos/TiposDeProyectos'
import Register from './register/Register'

export default function LandingPage() {
    return (
        <section className='landingPage'>
            <Hero/>
            <ComoFunciona/>
            <TiposDeProyectos/>
            <Register/>
        </section>
    )
}