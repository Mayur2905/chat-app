import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const config ={
    apiKey: "AIzaSyAGkQqkJvgOCJ7HmqCf2jz92R3yZ2K-PRI",
    authDomain: "chat-web-app-fdc3e.firebaseapp.com",
    databaseURL: "https://chat-web-app-fdc3e-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-fdc3e",
    storageBucket: "chat-web-app-fdc3e.appspot.com",
    messagingSenderId: "645848586549",
    appId: "1:645848586549:web:8166ba028ccdcf5deb547c"
  };

  const app =firebase.initializeApp(config);
  export const auth = app.auth();
  export const database = app.database();
