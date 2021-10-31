import React, { useRef } from 'react'
import { Divider } from 'rsuite';
import CreateRoomBtnModal from './CreateRoomBtnModal';
import DashboardToggle from './dahsboard/DashboardToggle'
import ChatRoomList from './rooms/ChatRoomList';

const Sidebar = () => {
    const topSidebarRef =useRef();
    const[height,setHeight] = useState(0);

    useEffect(() => {
        if(topSidebarRef.current){
            setHeight(topSidebarRef.current.scrolHeight)
        }  
    }, [topSidebarRef]);

    return (
        <div className="h-100 pt-2" >
            <div>
            <DashboardToggle/>
            <CreateRoomBtnModal/>
            <Divider>Join conversation</Divider>
            </div>
        <ChatRoomList aboveElHeight={height}/>
        </div>
    )
}

export default Sidebar;
