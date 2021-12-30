import { useContext } from 'react'
import ProfileContext from '../../../context/ProfileContext'
import genericAvatar from '../../../assets/genericAvatar.jpeg'

export default function Message ({ msg, activeChatRoomMessages, otherUserProfilePicture }) {

    const { profileData, profilePicture } = useContext(ProfileContext)

    const showAvatarOrTalkerIndicator = () => {
        /* We only show avatar or talker indicator if the previous msg wasn't sent by the same user as the present msg. */
        const msgIndex = activeChatRoomMessages.indexOf(msg)
        const previousMsg = msgIndex > 0 ? activeChatRoomMessages[msgIndex-1] : null

        if (!previousMsg) return true
        else if (profileData._id === msg.sentBy && profileData._id === previousMsg.sentBy) return false
        else if (profileData._id !== msg.sentBy && profileData._id !== previousMsg.sentBy) return false
        else return true
    }
    
    return (
        <article className={`message ${profileData._id === msg.sentBy ? 'sent' : 'received'}`}>
        {/* <article className={`message received`}> */}
            <div className='msg-container'>
                {showAvatarOrTalkerIndicator() ? <img src={profileData._id === msg.sentBy ?
                    profilePicture ? profilePicture : genericAvatar
                    :
                    otherUserProfilePicture ? otherUserProfilePicture : genericAvatar
                } alt='Avatar' /> : null}
                <div className='msg-content-container'>
                {showAvatarOrTalkerIndicator() ? <div className='talker-indicator'/> : null}
                    <p className='msg-content'>{msg.content}</p>
                </div>
                <p className='msg-time'>{new Date(msg.date).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
            </div>
        </article>
    )
}
