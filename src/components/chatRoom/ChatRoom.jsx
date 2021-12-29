import { useState, useEffect, useRef, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ChatContext from '../../context/ChatContext'
import ProfileContext from '../../context/ProfileContext'
import Input from './input/Input'
import genericAvatar from '../../assets/genericAvatar.jpeg'

export default function ChatRoom () {

    const [chatMsgs, setChatMsgs] = useState([])
    const [otherUser, setOtherUser] = useState(null)

    const { chatroomId } = useParams()
    const { getMessagesFromChatRoom, activeChatRoomParticipants } = useContext(ChatContext)
    const { profileData, fetchProfileData } = useContext(ProfileContext)

    const fixedScroll = useRef()

    const fetchOtherUserData = async () => {
        if (activeChatRoomParticipants) {

            const accessToken = localStorage.getItem('accessToken')

            let otherUserId = profileData._id !== activeChatRoomParticipants[0] ? activeChatRoomParticipants[0] : activeChatRoomParticipants[1]

            const response = await fetch(`http://localhost:3001/profile/user/${otherUserId}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': accessToken
                }
            })

            const data = await response.json()
            setOtherUser(data)
        }
    }

    useEffect(() => fetchProfileData(), [])

    useEffect(() => {
        getMessagesFromChatRoom(chatroomId)
        // fixedScroll.current.scrollIntoView({behavior: 'smooth'})
    }, [profileData])

    useEffect(() => fetchOtherUserData(), [activeChatRoomParticipants])

    return (
        <section className='chatRoom'>
            {otherUser ?
                <>
                    <div className='chatHeader'>
                        <h1>Chat con {otherUser.basic ? otherUser.basic.name : null}</h1>
                        <img src={otherUser.profilePicturePath ? otherUser.profilePicturePath : genericAvatar} alt='Profile picture' />
                    </div>

                    <div className='msgs-container'>
                        {chatMsgs && chatMsgs.length > 0 ?
                            chatMsgs.map(msg => <p>{msg}</p>)
                            :
                            null
                        }
                    </div>

                    <Input fixedScroll={fixedScroll} />
                </>
                :
                null
            }
        </section>
    )
}