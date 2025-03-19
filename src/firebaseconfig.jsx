// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFq999D5sHAekn8TESk5UBrJYWzKkO9rA",
  authDomain: "alvin-b2757.firebaseapp.com",
  projectId: "alvin-b2757",
  storageBucket: "alvin-b2757.firebasestorage.app",
  messagingSenderId: "649827558847",
  appId: "1:649827558847:web:e6a654c6d3fbebeee76d0a",
  measurementId: "G-4LY9FCYHML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, setDoc, doc };
