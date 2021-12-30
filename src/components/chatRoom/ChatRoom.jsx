import { useState, useEffect, useRef, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ChatContext from '../../context/ChatContext'
import ProfileContext from '../../context/ProfileContext'
import Input from './input/Input'
import Message from './message/Message'
import genericAvatar from '../../assets/genericAvatar.jpeg'

export default function ChatRoom () {

    const [otherUser, setOtherUser] = useState(null)

    const { chatroomId } = useParams()
    const { getMessagesFromChatRoom, activeChatRoomParticipants, activeChatRoomMessages } = useContext(ChatContext)
    const { profileData, fetchProfileData, fetchProfilePicture } = useContext(ProfileContext)

    const fixedScroll = useRef()

    const fetchOtherUserData = async () => {
        if (activeChatRoomParticipants) {

            const accessToken = localStorage.getItem('accessToken')
            const serverUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVSERVER_URL : process.env.REACT_APP_PRODSERVER_URL

            let otherUserId = profileData._id !== activeChatRoomParticipants[0] ? activeChatRoomParticipants[0] : activeChatRoomParticipants[1]

            const response = await fetch(`${serverUrl}/profile/user/${otherUserId}`, {
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

    useEffect(() => {
        fetchProfileData()
        fetchProfilePicture()
    }, [])

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
                        {activeChatRoomMessages && activeChatRoomMessages.length > 0 ?
                            activeChatRoomMessages.map(msg => <Message msg={msg} activeChatRoomMessages={activeChatRoomMessages} otherUserProfilePicture={otherUser.profilePicturePath} key={msg._id}/>)
                            :
                            null
                        }
                    </div>

                    <Input fixedScroll={fixedScroll} chatroomId={chatroomId} />
                </>
                :
                null
            }
        </section>
    )
}