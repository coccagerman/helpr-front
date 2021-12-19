
import { useState } from 'react'
import AuthenticationContext from './AuthenticationContext'

export default function AuthenticationContextProvider ({ children }) {

    /* Global state that is used to conditionally show components when user is logged in or not. */
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    /* Function that redirects the user from landingPage, login or register pages when already logged in. */
    const checkIfAlreadyAuthenticatedAndRedirect = async (urlJwt) => {
        let accessToken

        if (urlJwt) {
            accessToken = urlJwt
            localStorage.setItem('accessToken', urlJwt)
        } else {
            accessToken = localStorage.getItem('accessToken')
        }

        if (accessToken) {
            const response = await fetch('http://localhost:3001/users/validateToken', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()

            if (data === 'Valid token') {
                window.location = 'http://localhost:3000/selectAccountType'
            }
        }
    }

    /* Function that redirects the user from private pages when not logged in. */
    const checkIfNotAuthenticatedAndRedirect = async () => {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken) {

            const response = await fetch('http://localhost:3001/users/validateToken', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()

            if (data !== 'Valid token') {
                window.location.href = 'http://localhost:3000/login'
            }
        } else {
            window.location.href = 'http://localhost:3000/login'
        }
    }

    /* Function checks if user is authenticated and changes global state. */
    const checkIfAuthenticatedAndChangeState = async () => {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken) {

            const response = await fetch('http://localhost:3001/users/validateToken', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()
            data === 'Valid token' ? setIsLoggedIn(true) : setIsLoggedIn(false)

        } else {
            setIsLoggedIn(false)
        }
    }

    return (
        <AuthenticationContext.Provider value={{ isLoggedIn, setIsLoggedIn, checkIfAlreadyAuthenticatedAndRedirect, checkIfNotAuthenticatedAndRedirect, checkIfAuthenticatedAndChangeState }} >
            {children}
        </AuthenticationContext.Provider>
    )
}