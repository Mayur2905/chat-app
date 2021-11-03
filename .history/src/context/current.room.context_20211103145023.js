import React from "react";
import { createContext ,useContextSelector} from "use-context-selector";


const CreateRoomContext = createContext();
export const currentRoomProvider = ({children,data}) => {
    return (
    <CreateRoomContext.Provider value={data}>
        {children}
    </CreateRoomContext.Provider>
);
};

export const useCurrentRoom =(selector)=> useContextSelector(CurrentRoomContext,selector);
