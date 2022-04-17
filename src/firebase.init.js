// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApUhIii64JBMWduw2GeyWO2udR4UngLh0",
  authDomain: "photographer-services-7f1fe.firebaseapp.com",
  projectId: "photographer-services-7f1fe",
  storageBucket: "photographer-services-7f1fe.appspot.com",
  messagingSenderId: "807756829898",
  appId: "1:807756829898:web:4ef6e97891d32704625033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;