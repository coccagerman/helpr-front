export default function Message ({ msg, currentChat }) {
    
    return (
        <article className={`message ${msg.received ? 'received' : 'sent'}`}>
            <div className='msg-container'>
                <img src={msg.received ? currentChat.avatar : photoURL} alt='Avatar' />
                <div className='msg-content-container'>
                    <div className='talker-indicator'/>
                    <p className='msg-content'>{msg.content}</p>
                </div>
                <p className='msg-time'>{msg.date}</p>
            </div>
        </article>
    )
}