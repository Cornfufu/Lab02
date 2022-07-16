// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD84p_8YuaKdhbliJLzZNGGZjvlgY6kfwc",
  authDomain: "login-c16c3.firebaseapp.com",
  projectId: "login-c16c3",
  storageBucket: "login-c16c3.appspot.com",
  messagingSenderId: "1051568787313",
  appId: "1:1051568787313:web:d9e3e744fce7111a7070d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);