// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6cYmJl18WUQef7vOEgIM0tjh7dM9yBxM",
  authDomain: "tutbasic-6866d.firebaseapp.com",
  projectId: "tutbasic-6866d",
  storageBucket: "tutbasic-6866d.appspot.com",
  messagingSenderId: "380353670800",
  appId: "1:380353670800:web:ecc8cd95e473c742d6f215"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

function signup(email, password) {
    
}