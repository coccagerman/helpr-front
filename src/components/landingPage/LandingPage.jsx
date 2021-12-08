import { useContext, useEffect } from 'react'
import AuthenticationContext from '../../context/AuthenticationContext'

import Hero from './hero/Hero'
import ComoFunciona from './comoFunciona/ComoFunciona'
import TiposDeProyectos from './tiposDeProyectos/TiposDeProyectos'
import Register from './register/Register'

export default function LandingPage() {

    const { checkIfAlreadyAuthenticatedAndRedirect } = useContext(AuthenticationContext)
    useEffect(() => checkIfAlreadyAuthenticatedAndRedirect(), [])

    return (
        <section className='landingPage'>
            <Hero/>
            <ComoFunciona/>
            <TiposDeProyectos/>
            <Register/>
        </section>
    )
}