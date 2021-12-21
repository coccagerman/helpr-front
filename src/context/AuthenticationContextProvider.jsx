
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
                /* We validate if the user already has an account type. */
                /* If yes, we redirect to profile page. If not, we redirect to selectAccountType page. */
                /* This step is necesary since social network auth doesn't include account type selection. */
                const accountTypeResponse = await fetch('http://localhost:3001/profile/userGetByToken', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                    }
                })

                const accountTypeData = await accountTypeResponse.json()

                if (accountTypeData.accountType) window.location = 'http://localhost:3000/profile'
                else window.location = 'http://localhost:3000/selectAccountType'
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