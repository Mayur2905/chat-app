import React, { createContext, useState, useEffect,useContext,useRef} from 'react';
import { ref } from '@firebase/database';
import { auth, database } from '../misc/firebase';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let userRef;

    const authUnSub = auth.onAuthStateChanged(authObj => {
      if (authObj) {
        userRef = ref(database, `/profiles/${authObj.uid}`);
        useRef.on('value', snap => {
          const snapdata = snap.val();

          const data = {
            ...snapdata,
            uid: authObj.uid,
            email: authObj.email,
          };
          setProfile(() => data);
          setIsLoading(false);
        });
      } else {
        if (userRef) userRef.off();
        setProfile(null);
        setIsLoading(false);
      }
    });

    return () => {
      authUnSub();
      if (userRef) useRef.off();
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ isLoading, profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
