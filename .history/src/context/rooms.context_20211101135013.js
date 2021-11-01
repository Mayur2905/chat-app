import React,{ createContext, useContext, useEffect, useState } from "react";
import { database } from "../misc/firebase";
import { transformToArrwithId } from "../misc/helpers";



const RoomsContext = createContext();

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

    return <RoomsContext.Provider value={rooms}>{children}</RoomsContext.Provider>
};
 
export const useRooms =()=>useContext(RoomsContext);