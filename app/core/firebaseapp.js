// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';   
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc7bnzxWqzvdmJdh-AR_0xxmHfRmqQ7RI",
  authDomain: "restaurant-5ece6.firebaseapp.com",
  projectId: "restaurant-5ece6",
  storageBucket: "restaurant-5ece6.firebasestorage.app",
  messagingSenderId: "652501253769",
  appId: "1:652501253769:web:f4c3b349b3fb57f5c39058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authFeature = getAuth(app)
// export const auth = getAuth(app);
export const db = getFirestore(app); 
