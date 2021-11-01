import React from 'react'
import TimeAgo from 'timeago-react';


const RoomItem = ({room}) => {
    
    const{createdAt,name}=room;
    return (
        <div>
            <div className="d-flex justify-content-between align-item-center">
                <h3 className="text-disappers">{name}</h3>
                <TimeAgo
                    datetime={new Date(createdAt)} className="font-normal text-black-45"
                />

            </div >
            <div className="d-flex align-item-center text-black-70">
                <span>no messages yet...</span>
            </div>
        </div>
    )
}

export default RoomItem
