// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8tBs0SQz6TjSytcmFWAYrinCBx48ifTw",
  authDomain: "clone-af8d7.firebaseapp.com",
  projectId: "clone-af8d7",
  storageBucket: "clone-af8d7.appspot.com",
  messagingSenderId: "545572707748",
  appId: "1:545572707748:web:a6a52929b0ccdbe6aeb531",
  measurementId: "G-335YGYHGY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

export { db, auth };