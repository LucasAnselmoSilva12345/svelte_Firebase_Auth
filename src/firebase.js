// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI1NTIvNfnwUM0rnXDT-z4w_ioRN-ZvqM",
  authDomain: "sveltefirebaseauth.firebaseapp.com",
  projectId: "sveltefirebaseauth",
  storageBucket: "sveltefirebaseauth.appspot.com",
  messagingSenderId: "473532044058",
  appId: "1:473532044058:web:2f110c36cfcb911b97d2a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);