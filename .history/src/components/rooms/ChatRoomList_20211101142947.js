import React,{useLocation} from 'react'
import { Link } from 'react-router-dom'
import { Nav,Loader } from 'rsuite'
import { useRooms } from '../../context/rooms.context'
import RoomItem from './RoomItem'


const ChatRoomList = ({aboveElHeight}) => {
    const rooms = useRooms();
    const location = useLocation();


    return (
        <Nav
        appearance='subtle'
        vertical
        reversed
        className="overflow-y-scroll custom-scroll"
        style={{
            height: `calc(100% - ${aboveElHeight}px)`
        }}
        activeKey={location.pathname}
        >
        {!rooms && (
        <Loader center vertical content="Loading"speed="slow" size="md"/>)}
        {rooms && rooms.length > 0 && 
        rooms.map(room=>(
        <Nav.Item componentClass={Link}
        to={`/chats/${room.id}`}  
        key={room.id}
        eventKey={`/chats/${room.id}`}>
            <RoomItem room={room}/>
        </Nav.Item>
        ))}
        </Nav>
    )
}
export default ChatRoomList;
