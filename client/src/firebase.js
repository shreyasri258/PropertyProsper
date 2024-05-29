// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propertyprosper1.firebaseapp.com",
  projectId: "propertyprosper1",
  storageBucket: "propertyprosper1.appspot.com",
  messagingSenderId: "51048923670",
  appId: "1:51048923670:web:af91d65694a5bde4fc2b37"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);