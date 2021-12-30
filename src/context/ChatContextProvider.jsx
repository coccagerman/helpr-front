import ChatContext from './ChatContext'
import { useState } from 'react'

export default function ChatContextProvider ({ children }) {

    const [allUserChatrooms, setAllUserChatrooms] = useState(null)
    
    const [activeChatRoom, setActiveChatRoom] = useState(null)
    const [activeChatRoomMessages, setActiveChatRoomMessages] = useState([])
    const [activeChatRoomParticipants, setActiveChatRoomParticipants] = useState(null)

    const createNewChatRoom = async (participants, userId) => {
        const accessToken = localStorage.getItem('accessToken')

        const response = await fetch('http://localhost:3001/chat/createChatroom', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            },
            body: JSON.stringify({participants})
        })

        const data = await response.json()

        if (data.response === 'Success - Chatroom created' || data.response === 'Chatroom already exists') {
            window.location = `http://localhost:3000/chatRoom/${data.chatroomId}`
        }
    }

    const getMessagesFromChatRoom = async chatroomId => {
        const accessToken = localStorage.getItem('accessToken')

        const response = await fetch(`http://localhost:3001/chat/getAllmessagesFromChatroom/${chatroomId}`, {
            method: 'GET',
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

        const response = await fetch(`http://localhost:3001/chat//getAllChatroomsFromUser/${userId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            }
        })

        const data = await response.json()
        console.log(data)
        setAllUserChatrooms(data)
    }

    return (
        <ChatContext.Provider value={{
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