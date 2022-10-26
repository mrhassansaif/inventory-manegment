// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3PlgD1ag6Wu8gDvsWHlS6-i6wu9UpUjg",
  authDomain: "inventorymanagement-7e481.firebaseapp.com",
  projectId: "inventorymanagement-7e481",
  storageBucket: "inventorymanagement-7e481.appspot.com",
  messagingSenderId: "859509798600",
  appId: "1:859509798600:web:cedc3dbc304bc6fe3517fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore()

// Exporting Firebase
export {app, auth, createUserWithEmailAndPassword, doc, db, setDoc, signInWithEmailAndPassword, onAuthStateChanged, signOut };