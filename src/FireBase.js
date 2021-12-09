import firebase from "firebase";

//authentication
import "firebase/auth";
//firestore db
import "firebase/firestore";
//realtime db
import "firebase/database";
//storage
import "firebase/storage";
import "firebase/functions";
//functions

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX-HZYWNteSffGCIq3JvWL7sR7HcRED7E",
  authDomain: "spotify-clone-7929b.firebaseapp.com",
  projectId: "spotify-clone-7929b",
  storageBucket: "spotify-clone-7929b.appspot.com",
  messagingSenderId: "808585881517",
  appId: "1:808585881517:web:5c4ea16f965143d33f2324",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;
