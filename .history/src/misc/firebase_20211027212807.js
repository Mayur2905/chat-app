import { initializeApp } from "firebase/app"
// import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const config = {
    apiKey: "AIzaSyAGkQqkJvgOCJ7HmqCf2jz92R3yZ2K-PRI",
    authDomain: "chat-web-app-fdc3e.firebaseapp.com",
    databaseURL: 'https://chat-web-app-fdc3e.firebaseio.com',
    projectId: "chat-web-app-fdc3e",
    storageBucket: "chat-web-app-fdc3e.appspot.com",
    messagingSenderId: "645848586549",
    appId: "1:645848586549:web:8166ba028ccdcf5deb547c"
  };

const app =initializeApp(config);
// export const auth = getAuth(app);
export const database = getDatabase(app);
