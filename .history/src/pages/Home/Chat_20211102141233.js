import React from 'react'
import Messages from '../../components/chat-window/messages';
import ChatTop from '../../components/chat-window/top';
import ChatBottom from '../../components/chat-window/bottom';
import { useParams } from 'react-router';
import { useRooms } from '../../context/rooms.context';
import { Loader } from 'rsuite';


const Chat = () => {

    const {chatId} = useParams();

    const rooms = useRooms();

    if(! rooms) {
        return < center vertical size="md" content="Loading" speed='slow'/>
    }

    return (
        <div>
            <div className='chat-top'>
                <ChatTop /> 
            </div>
            <div className='chat-middle'>
                <Messages/>
            </div>
            <div className='chat-bottom'>
                <ChatBottom/>
            </div>
        </div>
    )
};
export default Chat;
