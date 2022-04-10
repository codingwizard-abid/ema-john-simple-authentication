// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbMqK1O4SCpB3o-tiTDPBYk8EjUvq2Ci8",
  authDomain: "ema-john-simple-ecf72.firebaseapp.com",
  projectId: "ema-john-simple-ecf72",
  storageBucket: "ema-john-simple-ecf72.appspot.com",
  messagingSenderId: "954208036260",
  appId: "1:954208036260:web:f76dfdd8f7d123b45e4d31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;