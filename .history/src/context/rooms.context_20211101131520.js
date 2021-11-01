import React,{ createContext, useEffect, useState } from "react";
import { database } from "../misc/firebase";
import { transformToArrwithId } from "../misc/helpers";



const RoomContext = createContext();

export const RoomsProvider =({children}) => {
    const[rooms,setRooms] = useState(null);
    useEffect(()=>
    {
        const roomListRef = database.ref('room');

        roomListRef.on('value',(snap)=>{
            const data = transformToArrwithId(snap.val())
             setRooms(data);
        });
        return()=>{
            roomListRef.off()
        }
    },[]);

    return <RoomContext.Provider value={rooms}>{children}</RoomContext.Provider>
}