// import firebase from 'firebase/app';
import firebase from "firebase/compat/app";
// import 'firebase/auth';
import "firebase/compat/auth";


export const auth = firebase.initializeApp( {
  apiKey: "AIzaSyAO7sXBOJMhB75tR4gKn8o1Wuz7EjFmgaA",
  authDomain: "chatplanet-8e5ce.firebaseapp.com",
  projectId: "chatplanet-8e5ce",
  storageBucket: "chatplanet-8e5ce.appspot.com",
  messagingSenderId: "452105934238",
  appId: "1:452105934238:web:96f50a2666c35e7596b28f",
}).auth();

