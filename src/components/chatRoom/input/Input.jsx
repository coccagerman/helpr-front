import { useState, useContext } from 'react'
import ProfileContext from '../../../context/ProfileContext'
import ChatContext from '../../../context/ChatContext'

import { Icon } from '@iconify/react'

export default function Input ({ fixedScroll, chatroomId }) {

    const { profileData } = useContext(ProfileContext)
    const { getMessagesFromChatRoom } = useContext(ChatContext)
    
    const [formValue, setFormValue] = useState('')

    const sendMessage = async e => {
        e.preventDefault()
        const accessToken = localStorage.getItem('accessToken')
        const serverUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVSERVER_URL : process.env.REACT_APP_PRODSERVER_URL

        const newMessage = {
            content: formValue,
            date: new Date(),
            sentBy: profileData._id
        }

        const response = await fetch(`${serverUrl}/chat/sendNewMessage/${chatroomId}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': accessToken
            },
            body: JSON.stringify({newMessage})
        })

        const data = await response.json()
        
        if (data === 'Success - Message sent') {
            getMessagesFromChatRoom(chatroomId)
            setFormValue('')
            // setTimeout(() => fixedScroll.current.scrollIntoView({behavior: 'smooth'}), .1)
        }
    }

    return (
        <form className='chatInput'>
            <input type='text' placeholder='Escribe un mensaje aquí' value={formValue} onChange={e => setFormValue(e.target.value)}/>
            <button onClick={e => sendMessage(e)} disabled={formValue.length === 0}>
                <Icon className='icon' icon="bx:bxs-paper-plane" color='#3a53b7'/>
            </button>
        </form>
    )
} 
