import React from 'react'
import { Divider } from 'rsuite';
import CreateRoomBtnModal from './CreateRoomBtnModal';
import DashboardToggle from './dahsboard/DashboardToggle'
import ChatRoomList from './rooms/ChatRoomList';

const Sidebar = () => {
    return (
        <div className="h-100 pt-2" >
            <div>
            <DashboardToggle/>
            <CreateRoomBtnModal/>
            <Divider>Join conversation</Divider>
            </div>
        <ChatRoomList/>
        </div>
    )
}

export default Sidebar;
