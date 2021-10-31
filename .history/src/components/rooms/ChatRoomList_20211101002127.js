import React from 'react'
import { Nav } from 'rsuite'
import RoomItem from './RoomItem'


const ChatRoomList = () => {
    return (
        <Nav
        appearance='subtle'
        vertical
        reversed
        className="overflow-y-scroll custom-scroll"
        >
        <Nav.Item>
            <RoomItem/>
        </Nav.Item>
        </Nav>
    )
}

export default ChatRoomList
