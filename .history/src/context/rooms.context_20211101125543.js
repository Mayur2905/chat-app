import React,{ createContext, useEffect, useState } from "react";
import { database } from "../misc/firebase";



const RoomContext = createContext();

export const RoomProvider =({children}) => {
    const[rooms,setRooms] = useState(null);
    useEffect(()=>
    {
        const roomListRef = database.ref('room');

        roomListRef.on('value',(snap)=>{
            console.log('snap.val()',snap.val())
        })
        return()=>{
            roomListRef.off()
        }
    },[]);

    return <RoomContext.Provider value="hello">{children}</RoomContext.Provider>
}