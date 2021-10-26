import React, { createContext, useState, useContext, useEffect } from 'react';
import {
  serverTimestamp,
  ref,
  onValue,
  onDisconnect,
  set,
  off,
} from 'firebase/database';
// import { getToken } from 'firebase/messaging';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, database} from '../misc/firebase';

export const isOfflineForDatabase = {
  state: 'offline',
  last_changed: serverTimestamp(),
};

const isOnlineForDatabase = {
  state: 'online',
  last_changed: serverTimestamp(),
};

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let userRef;
    let userStatusRef;

    const authUnsub = onAuthStateChanged(auth, async authObj => {
      if (authObj) {
        userStatusRef = ref(database, `/status/${authObj.uid}`);
        userRef = ref(database, `/profiles/${authObj.uid}`);

        onValue(userRef, snap => {
          const { name, createdAt, avatar } = snap.val();

          const data = {
            name,
            createdAt,
            avatar,
            uid: authObj.uid,
            email: authObj.email,
          };

          setProfile(data);
          setIsLoading(false);
        });

        onValue(ref(database, '.info/connected'), snapshot => {
          if (!!snapshot.val() === false) {
            return;
          }

          onDisconnect(userStatusRef)
            .set(isOfflineForDatabase)
            .then(() => {
              set(userStatusRef, isOnlineForDatabase);
            });
        });

      } else {
        if (userRef) {
          off(userRef);
        }

        if (userStatusRef) {
          off(userStatusRef);
        }

        off(ref(database, '.info/connected'));

        setProfile(null);
        setIsLoading(false);
      }
    });

    return () => {
      authUnsub();

      off(ref(database, '.info/connected'));

      if (userRef) {
        off(userRef);
      }

      if (userStatusRef) {
        off(userStatusRef);
      }
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ isLoading, profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
