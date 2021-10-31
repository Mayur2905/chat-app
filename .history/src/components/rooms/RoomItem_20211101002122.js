import React from 'react'

const RoomItem = () => {
    return (
        <div>
            <div className="d-flex justify-content-between align-item-center">
                <h3 className="text-disappers">Room Name</h3>
                <span></span>

            </div >
            <div className="d-flex align-item-center text-black-70">
                <span>no messages yet...</span>
            </div>
        </div>
    )
}

export default RoomItem
