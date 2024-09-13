// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxj93pN-cuyfe2WCGAA975plfkuOT3G1A",
  authDomain: "maaxweb-app.firebaseapp.com",
  projectId: "maaxweb-app",
  storageBucket: "maaxweb-app.appspot.com",
  messagingSenderId: "122867224055",
  appId: "1:122867224055:web:c6262b22c18d8b71dbf2f2",
  measurementId: "G-DKFEHX7N8F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
