import { useContext, useEffect } from 'react'
import AuthenticationContext from '../../context/AuthenticationContext'
import { useLocation } from 'react-router-dom'

import Hero from './hero/Hero'
import ComoFunciona from './comoFunciona/ComoFunciona'
import TiposDeProyectos from './tiposDeProyectos/TiposDeProyectos'
import Register from './register/Register'

export default function LandingPage() {

    /* URL params search used to identify jwt when authenticating wit social networks */
    const search = useLocation().search
    const urlJwt = new URLSearchParams(search).get('jwt')
    const authCheckRedirectionParam = urlJwt ? `Bearer ${urlJwt}` : null

    const { checkIfAlreadyAuthenticatedAndRedirect } = useContext(AuthenticationContext)
    useEffect(() => checkIfAlreadyAuthenticatedAndRedirect(authCheckRedirectionParam), [])

    return (
        <section className='landingPage'>
            <Hero/>
            <ComoFunciona/>
            <TiposDeProyectos/>
            <Register/>
        </section>
    )
}