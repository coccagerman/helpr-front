import { useState } from 'react'

export default function ChatPanel () {

    const [activeChats, setActiveChats] = useState([])

    return (
        <section className='chatPanel'>
            {activeChats && activeChats.length > 0 ?
                <p>Estos son tus chats.</p>
                :
                <p>Aún no tenés chats activos. Contactate con un candidato.</p>
            }
        </section>
    )
}