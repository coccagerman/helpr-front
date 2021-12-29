import { useState, useContext } from 'react'
import ProfileContext from '../../../context/ProfileContext'

import { Icon } from '@iconify/react'

export default function Input ({ fixedScroll }) {

    const { profileData } = useContext(ProfileContext)
    
    const [formValue, setFormValue] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()
        
        const newMsg = {
            content: formValue,
            date: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            sentBy: profileData._id
        }
            
        setFormValue('')
        setTimeout(() => fixedScroll.current.scrollIntoView({behavior: 'smooth'}), .1)
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
