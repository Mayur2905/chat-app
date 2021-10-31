import React from 'react'
import { Divider } from 'rsuite';
import CreateRoomBtnModal from './CreateRoomBtnModal';
import DashboardToggle from './dahsboard/DashboardToggle'

const Sidebar = () => {
    return (
        <div className="h-100 pt-2" >
            <div>
            <DashboardToggle/>
            <CreateRoomBtnModal/>
            <Divider>Join conversation</Divider>
            </div>
        bottom
        </div>
    )
}

export default Sidebar;
