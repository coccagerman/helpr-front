import { useEffect, useContext } from 'react'
import ChatContext from '../../context/ChatContext'
import ProfileContext from '../../context/ProfileContext'
import ChatSnippet from './chatSnippet/ChatSnippet'

export default function ChatPanel () {

    const { getAllUserChatRooms, allUserChatrooms } = useContext(ChatContext)
    const { profileData } = useContext(ProfileContext)

    useEffect(() => getAllUserChatRooms(profileData._id), [])

    return (
        <section className='chatPanel'>
            {allUserChatrooms && allUserChatrooms.length > 0 ?
                <>
                    <h1>Chats activos:</h1>
                    {allUserChatrooms.map(chatRoom => <ChatSnippet chatRoom={chatRoom} key={chatRoom._id} />)}
                </>
                :
                <p>Aún no tenés chats activos. Contactate con un candidato.</p>
            }
        </section>
    )
}