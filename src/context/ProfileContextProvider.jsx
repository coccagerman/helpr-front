
import { useState } from 'react'
import ProfileContext from './ProfileContext'

export default function ProfileContextProvider ({ children }) {

    const [profileData, setProfileData] = useState(null)

    const fetchProfileData = async () => {
        if (!profileData) {
            let accessToken = localStorage.getItem('accessToken')

            const response = await fetch('http://localhost:3001/users/profile', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()
            setProfileData(data)
        }
    }

    const editUserRecord = async (fieldToEdit, fieldData) => {
        let accessToken = localStorage.getItem('accessToken')

        const editionResponse = await fetch('http://localhost:3001/users/profile', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            },
            body: JSON.stringify({
                'fieldToEdit': fieldToEdit,
                'fieldData': fieldData
            })
        })

        const editionData = await editionResponse.json()

        if (editionData === 'Successful edition') {
            const response = await fetch('http://localhost:3001/users/profile', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()
            setProfileData(data)
        }
    }

    return (
        <ProfileContext.Provider value={{ profileData, fetchProfileData, editUserRecord }} >
            {children}
        </ProfileContext.Provider>
    )
}