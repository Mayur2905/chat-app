import React, {createContext, useState, useContext,useEffect} from "react"
import { auth, database} from '../misc/firebase';

const ProfileContext = createContext()

export const ProfileProvider =({children})=>{
    const [profile,setProfile]=useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(authObj => {
            if(authObj){
                database.ref(`/profiles/${authObj.uid}`).on('value',(snap)=>{
                    const profileData = snap.val();
                    console.log(profileData);
                })
                const data ={
                    uid: auth.uid,
                    email : authObj.email
                }
                setProfile(data);
            }else {
                setProfile(null);
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