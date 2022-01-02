import ChatContext from './ChatContext'
import { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'

export default function ChatContextProvider ({ children }) {

    const serverUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVSERVER_URL : process.env.REACT_APP_PRODSERVER_URL
    const frontUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVFRONT_URL : process.env.REACT_APP_PRODFRONT_URL

    const [allUserChatrooms, setAllUserChatrooms] = useState(null)
    
    const [activeChatRoom, setActiveChatRoom] = useState(null)
    const [activeChatRoomMessages, setActiveChatRoomMessages] = useState([])
    const [activeChatRoomParticipants, setActiveChatRoomParticipants] = useState(null)

    /* Websocket */
    const socket = socketIOClient(serverUrl)

    useEffect(() => {
        socket.on('messages', data => setActiveChatRoomMessages(data))
        return () => socket.disconnect()
    }, [])
    /*  */

    const createNewChatRoom = async (participants, userId) => {
        const accessToken = localStorage.getItem('accessToken')

        const response = await fetch(`${serverUrl}/chat/createChatroom`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            },
            body: JSON.stringify({participants})
        })

        const data = await response.json()

        if (data.response === 'Success - Chatroom created' || data.response === 'Chatroom already exists') {
            window.location = `${frontUrl}/chatRoom/${data.chatroomId}`
        }
    }

    const getMessagesFromChatRoom = async chatroomId => {
        const accessToken = localStorage.getItem('accessToken')

        const response = await fetch(`${serverUrl}/chat/getAllmessagesFromChatroom/${chatroomId}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            }
        })

        const data = await response.json()

        setActiveChatRoom(data.chatroomData)
        setActiveChatRoomMessages(data.chatroomMessages)
        setActiveChatRoomParticipants(data.chatroomData.participants)
    }

    const getAllUserChatRooms = async userId => {
        const accessToken = localStorage.getItem('accessToken')

        const response = await fetch(`${serverUrl}/chat//getAllChatroomsFromUser/${userId}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            }
        })

        const data = await response.json()
        setAllUserChatrooms(data)
    }

    const sendMessage = async (e, newMessage) => {
        e.preventDefault()

        socket.emit('new-message', newMessage)
    }


    return (
        <ChatContext.Provider value={{
            sendMessage,
            createNewChatRoom,
            getMessagesFromChatRoom,
            getAllUserChatRooms,
            allUserChatrooms,
            activeChatRoom,
            activeChatRoomMessages,
            activeChatRoomParticipants
            }} >
            {children}
        </ChatContext.Provider>
    )
}