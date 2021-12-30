
import { useState } from 'react'
import AuthenticationContext from './AuthenticationContext'
import { useContext } from 'react'
import ProfileContext from './ProfileContext'

export default function AuthenticationContextProvider ({ children }) {

    const { profileData } = useContext(ProfileContext)
    const serverUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVSERVER_URL : process.env.REACT_APP_PRODSERVER_URL
    const frontUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVFRONT_URL : process.env.REACT_APP_PRODFRONT_URL

    /* Global state that is used to conditionally show components when user is logged in or not. */
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    /* Function that redirects the user from landingPage, login or register pages when already logged in. */
    const checkIfAlreadyAuthenticatedAndRedirect = async urlJwt => {
        let accessToken

        if (urlJwt) {
            accessToken = urlJwt
            localStorage.setItem('accessToken', urlJwt)
        } else {
            accessToken = localStorage.getItem('accessToken')
        }

        if (accessToken) {
            const response = await fetch(`${serverUrl}/users/validateToken`, {
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
                const accountTypeResponse = await fetch(`${serverUrl}/profile/userGetByToken`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                    }
                })

                const accountTypeData = await accountTypeResponse.json()

                if (accountTypeData.accountType) window.location = `${frontUrl}/myProfile`
                else window.location = `${frontUrl}/selectAccountType`
            }
        }
    }

    /* Function that redirects the user from private pages when not logged in. */
    const checkIfNotAuthenticatedAndRedirect = async () => {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken) {

            const response = await fetch(`${serverUrl}/users/validateToken`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()

            if (data !== 'Valid token') {
                window.location.href = `${frontUrl}/login`
            }
        } else {
            window.location.href = `${frontUrl}/login`
        }
    }

    /* Function checks if user is authenticated and changes global state. */
    const checkIfAuthenticatedAndChangeState = async () => {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken) {

            const response = await fetch(`${serverUrl}/users/validateToken`, {
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

    /* Function that redirects volunteer users from pages only for organizations. */
    const checkIfNotOrganizationAndRedirect = async () => {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken) {
            if (!profileData) {
                const response = await fetch(`${serverUrl}/profile`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'authorization': accessToken
                    }
                })

                const data = await response.json()

                if (data.accountType !== 'organization') window.location.href = `${frontUrl}/`

            } else { if (profileData.accountType !== 'organization') window.location.href = `${frontUrl}/` }
        } else window.location.href = `${frontUrl}/login`
    }

    /* Function that redirects organization users from pages only for volunteers. */
    const checkIfNotVolunteerAndRedirect = async () => {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken) {
            if (!profileData) {

                const response = await fetch(`${serverUrl}/profile`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'authorization': accessToken
                    }
                })

                const data = await response.json()

                if (data.accountType !== 'volunteer') window.location.href = `${frontUrl}/`

            } else { if (profileData.accountType !== 'volunteer') window.location.href = `${frontUrl}/` }
        } else window.location.href = `${frontUrl}/login`
    }

    return (
        <AuthenticationContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            checkIfAlreadyAuthenticatedAndRedirect,
            checkIfNotAuthenticatedAndRedirect,
            checkIfAuthenticatedAndChangeState,
            checkIfNotOrganizationAndRedirect,
            checkIfNotVolunteerAndRedirect
            }} >
            {children}
        </AuthenticationContext.Provider>
    )
}