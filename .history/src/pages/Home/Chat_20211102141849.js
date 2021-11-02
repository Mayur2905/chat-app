import React from 'react'
import { useParams } from 'react-router';
import { Loader } from 'rsuite';
import { useRooms } from '../../context/rooms.context';
import Messages from '../../components/chat-window/messages';
import ChatTop from '../../components/chat-window/top';
import ChatBottom from '../../components/chat-window/bottom';


const Chat = () => {

    const {chatId} = useParams();

    const rooms = useRooms();

    if(! rooms) {
        return <Loader center vertical size="md" content="Loading" speed='slow'/>
    }

    const currentRoom = rooms.find(room =>room.id === chatId);

    if(currentRoom){
        return<h6 className="text-center mt-page">Chat {chatId} not found </h6>
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
