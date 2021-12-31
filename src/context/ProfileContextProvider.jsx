import { useState } from 'react'
import ProfileContext from './ProfileContext'

export default function ProfileContextProvider ({ children }) {

    const [profileData, setProfileData] = useState(null)
    const [profilePicture, setProfilePicture] = useState(null)
    const [educationRecords, setEducationRecords] = useState(null)
    const [experienceRecords, setExperienceRecords] = useState(null)
    const [jobsRecords, setJobsRecords] = useState(null)
    const [showProfilePictureErrorModal, setShowProfilePictureErrorModal] = useState(false)

    const [userProfileData, setUserProfileData] = useState(null)
    const [userProfilePicture, setUserProfilePicture] = useState(null)

    const serverUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVSERVER_URL : process.env.REACT_APP_PRODSERVER_URL

    /* Fetch general profile data */
    /* If userId is provided info from that user is provided, else logged in user info is provided */
    const fetchProfileData = async userId => {

        const accessToken = localStorage.getItem('accessToken')

        if (!userId) {
            const response = await fetch(`${serverUrl}/profile`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()
            setProfileData(data)

        } else {
            const response = await fetch(`${serverUrl}/profile/user/${userId}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()
            setUserProfileData(data)
        }
    }

    /* Edit general profile data */
    const editUserRecord = async (fieldToEdit, fieldData, queryType) => {
        const accessToken = localStorage.getItem('accessToken')

        const editionResponse = await fetch(`${serverUrl}/profile`, {
            method: 'PUT',
            mode: 'cors',
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
            const response = await fetch(`${serverUrl}/profile`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()
            setProfileData(data) 
            return true
        } else {
            return false
        }
    }

    /* Edit profile picture */
    const editProfilePicture = async (profilePicture) => {
        const accessToken = localStorage.getItem('accessToken')

        const editionRresponse = await fetch(`${serverUrl}/profile/profilePicture`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            },
            body: JSON.stringify(profilePicture)
        })

        const editionData = await editionRresponse.json()
        
        if (editionData === 'Successful edition') {
            
            const response = await fetch(`${serverUrl}/profile/profilePicture`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()
            setProfilePicture(data)
        
        } else setShowProfilePictureErrorModal(true)
    }

    /* Fetch profile picture */
    /* If userId is provided picture from that user is provided, else logged in user picture is provided */
    const fetchProfilePicture = async userId => {
        const accessToken = localStorage.getItem('accessToken')

        if (!userId) {
            const response = await fetch(`${serverUrl}/profile/profilePicture`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()
            setProfilePicture(data)
        } else {
            const response = await fetch(`${serverUrl}/profile/profilePicture/user/${userId}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()
            setUserProfilePicture(data)
        }
    }

    /* Fetch education data */
    const fetchEducationRecords = async () => {
        if (!educationRecords) {
            const accessToken = localStorage.getItem('accessToken')

            const response = await fetch(`${serverUrl}/profile/educationRecords`, {
                method: 'GET',
                mode: 'cors',
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
            const accessToken = localStorage.getItem('accessToken')

            const response = await fetch(`${serverUrl}/profile/experienceRecords`, {
                method: 'GET',
                mode: 'cors',
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

    /* Fetch job records */
    const fetchJobsRecords = async () => {
        const accessToken = localStorage.getItem('accessToken')

        if (!jobsRecords) {
            const response = await fetch(`${serverUrl}/profile/JobRecords`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()
            setJobsRecords(data)
        }
    }

    /* Edit education or experience data */
    const editEducationOrExperienceRecord = async (fieldToEdit, queryType, fieldData) => {
        const accessToken = localStorage.getItem('accessToken')

        const editionResponse = await fetch(`${serverUrl}/profile`, {
            method: 'PUT',
            mode: 'cors',
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
            let url = (fieldToEdit === 'education' ? `${serverUrl}/profile/educationRecords` : `${serverUrl}/profile/experienceRecords`)  
            
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
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

    /* Edit jobs data */
    const editJobsRecord = async (fieldToEdit, queryType, fieldData) => {
        const accessToken = localStorage.getItem('accessToken')

        const editionResponse = await fetch(`${serverUrl}/profile`, {
            method: 'PUT',
            mode: 'cors',
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
            
            const response = await fetch(`${serverUrl}/profile/jobRecords`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()
            setJobsRecords(data)
        }
    }

    /* Function that resets all global states after logout */
    const cleanStateAfterLogout = () => {
        setProfileData(null)
        setProfilePicture(null)
        setEducationRecords(null)
        setExperienceRecords(null)
        setJobsRecords(null)
    }

    return (
        <ProfileContext.Provider value={{
            profileData,
            userProfileData,
            profilePicture,
            userProfilePicture,
            educationRecords,
            experienceRecords,
            fetchProfileData,
            cleanStateAfterLogout,
            editUserRecord,
            fetchProfilePicture,
            editProfilePicture,
            showProfilePictureErrorModal,
            setShowProfilePictureErrorModal,
            fetchEducationRecords,
            fetchExperienceRecords,
            editEducationOrExperienceRecord,
            editJobsRecord,
            fetchJobsRecords,
            jobsRecords,
            setJobsRecords
        }} >
            {children}
        </ProfileContext.Provider>
    )
}