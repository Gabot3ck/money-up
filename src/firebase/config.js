// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsmTuO1Kzl9fns-mGXpeN13ElM-6Sx-qg",
  authDomain: "money-up-99417.firebaseapp.com",
  projectId: "money-up-99417",
  storageBucket: "money-up-99417.appspot.com",
  messagingSenderId: "401810430024",
  appId: "1:401810430024:web:d4148d2c1ecfbbac16607d"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );