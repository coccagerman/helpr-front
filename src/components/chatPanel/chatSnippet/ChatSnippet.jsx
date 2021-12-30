import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import ProfileContext from '../../../context/ProfileContext'
import genericAvatar from '../../../assets/genericAvatar.jpeg'

export default function ChatSnippet ({chatRoom}) {

    const [otherUserProfilePicture, setOtherUserProfilePicture] = useState(null)
    const [otherUserName, setOtherUserName] = useState(null)
    const [chatLastMsg, setChatLastMsg] = useState(null)

    const { profileData } = useContext(ProfileContext)

    const otherUserId = profileData._id !== chatRoom.participants[0] ? chatRoom.participants[0] : chatRoom.participants[1]

    const fetchOtherUserProfilePicture = async () => {
        const accessToken = localStorage.getItem('accessToken')
        const serverUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVSERVER_URL : process.env.REACT_APP_PRODSERVER_URL

        const response = await fetch(`${serverUrl}/profile/profilePicture/user/${otherUserId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            }
        })

        const data = await response.json()
        setOtherUserProfilePicture(data)
    }

    const fetchOtherUserName = async () => {
        const accessToken = localStorage.getItem('accessToken')
        const serverUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVSERVER_URL : process.env.REACT_APP_PRODSERVER_URL

        const response = await fetch(`${serverUrl}/profile/user/${otherUserId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            }
        })

        const data = await response.json()
        setOtherUserName(data.basic.name)
    }

    const getLastMessageFromChatRoom = async () => {
        const accessToken = localStorage.getItem('accessToken')
        const serverUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVSERVER_URL : process.env.REACT_APP_PRODSERVER_URL

        const response = await fetch(`${serverUrl}/chat/getAllmessagesFromChatroom/${chatRoom._id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            }
        })

        const data = await response.json()

        setChatLastMsg(data.chatroomMessages[data.chatroomMessages.length-1])
    }

    const shortenText = text => text.length > 50 ? text.slice(0, 50 - 1) + '…' : text

    useEffect(() => {
        fetchOtherUserProfilePicture()
        fetchOtherUserName()
        getLastMessageFromChatRoom()
    }, [])

    return (
        <Link to={`/chatRoom/${chatRoom._id}`} className='chatSnippet'>
            <img src={otherUserProfilePicture ? otherUserProfilePicture : genericAvatar} alt='Avatar' />
            <div className='nameAndMsg-container'>
                <h2>{otherUserName ? otherUserName : null}</h2>
                <p>{chatLastMsg ? shortenText(chatLastMsg.content) : 'Este chat aún no tiene mensajes.'}</p>
            </div>
        </Link>
    )
}