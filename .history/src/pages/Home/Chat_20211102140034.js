import React from 'react'
import Messages from '../../components/chat window/messages';

const Chat = () => {
    return (
        <div>
            <div>
                <ChatTop />
            </div>
            <div>
                <Messages/>
            </div>
            <div>
                <ChatBottom/>
            </div>
        </div>
    )
};
export default Chat;
