import React, {createContext, useState, useContext} from "react"
import { auth, database} from '../misc/firebase';

const ProfileContext = createContext()

export const ProfileProvider =({children})=>{
    const [profile,setProfile]=useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(authObj => {
            if(authObj){
                database.ref(`/profiles/${authObj.uid}`).on('value',(snap)=>{
                    console.log('snap',snap)
                })
                const data ={
                    uid: auth.uid,
                    email : authObj.email
                }
                setProfile(data);
            }else {

            }
        })
        },
     [])

    return(
    <ProfileContext.Provider value={profile} >
        {children}
        </ProfileContext.Provider>
        );
};

export const useProfile = () => useContext(ProfileContext);