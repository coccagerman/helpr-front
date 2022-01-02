import { useState, useContext } from 'react'
import ProfileContext from '../../../context/ProfileContext'
import ChatContext from '../../../context/ChatContext'

import { Icon } from '@iconify/react'

export default function Input ({ scrollDown, chatroomId }) {

    const { profileData } = useContext(ProfileContext)
    const { sendMessage, getMessagesFromChatRoom } = useContext(ChatContext)
    
    const [formValue, setFormValue] = useState('')

    return (
        <form className='chatInput'>
            <input type='text' placeholder='Escribe un mensaje aquí' value={formValue} onChange={e => setFormValue(e.target.value)}/>
            <button disabled={formValue.length === 0} onClick={e => {
                sendMessage(e, {
                    chatroomId: chatroomId,
                    content: formValue,
                    date: new Date(),
                    sentBy: profileData._id
                })   
                getMessagesFromChatRoom(chatroomId)
                setFormValue('')
                scrollDown()
                }}>
                <Icon className='icon' icon="bx:bxs-paper-plane" color='#3a53b7'/>
            </button>
        </form>
    )
} 
