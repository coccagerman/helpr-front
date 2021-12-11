
import { useState } from 'react'
import ProfileContext from './ProfileContext'

export default function ProfileContextProvider ({ children }) {

    const [profileData, setProfileData] = useState(null)
    const [educationRecords, setEducationRecords] = useState(null)
    const [experienceRecords, setExperienceRecords] = useState(null)

    /* Fetch general profile data */
    const fetchProfileData = async () => {
        if (!profileData) {
            let accessToken = localStorage.getItem('accessToken')

            const response = await fetch('http://localhost:3001/profile', {
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

    /* Edit general profile data */
    const editUserRecord = async (fieldToEdit, fieldData, queryType) => {
        let accessToken = localStorage.getItem('accessToken')

        const editionResponse = await fetch('http://localhost:3001/profile', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            },
            body: JSON.stringify({
                'fieldToEdit': fieldToEdit,
                'fieldData': fieldData,
                'queryType': queryType
            })
        })

        const editionData = await editionResponse.json()

        if (editionData === 'Successful edition') {
            const response = await fetch('http://localhost:3001/profile', {
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

    /* Fetch education data */
    const fetchEducationRecords = async () => {
        if (!educationRecords) {
            let accessToken = localStorage.getItem('accessToken')

            const response = await fetch('http://localhost:3001/profile/educationRecords', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()
            setEducationRecords(data)
        }
    }

    /* Fetch experience data */
    const fetchExperienceRecords = async () => {
        if (!educationRecords) {
            let accessToken = localStorage.getItem('accessToken')

            const response = await fetch('http://localhost:3001/profile/experienceRecords', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()
            setExperienceRecords(data)
        }
    }

    /* Edit education or experience data */
    const editEducationOrExperienceRecord = async (fieldToEdit, queryType, fieldData) => {
        let accessToken = localStorage.getItem('accessToken')

        const editionResponse = await fetch('http://localhost:3001/profile', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            },
            body: JSON.stringify({
                'fieldToEdit': fieldToEdit,
                'queryType': queryType,
                'fieldData': fieldData
            })
        })

        const editionData = await editionResponse.json()

        if (editionData === 'Successful edition') {
            let url = (fieldToEdit === 'education' ? 'http://localhost:3001/profile/educationRecords' : 'http://localhost:3001/profile/experienceRecords')  
            
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()
            fieldToEdit === 'education' ? setEducationRecords(data) : setExperienceRecords(data)
            
        }
    }

    return (
        <ProfileContext.Provider value={{ profileData, educationRecords, experienceRecords, fetchProfileData, editUserRecord, fetchEducationRecords, fetchExperienceRecords, editEducationOrExperienceRecord }} >
            {children}
        </ProfileContext.Provider>
    )
}