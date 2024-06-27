// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGA2ZEqb5K76w7lwMUyvtOc2tH4hXxsj4",
  authDomain: "hacaton-acbf9.firebaseapp.com",
  projectId: "hacaton-acbf9",
  storageBucket: "hacaton-acbf9.appspot.com",
  messagingSenderId: "435597942567",
  appId: "1:435597942567:web:197968bbdebf1b3e501302",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
