// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // apiKey: "AIzaSyAtabgJKryPbzMPnCvJvAUXsSZlHwzzKfI",
  authDomain: "smion-estate.firebaseapp.com",
  projectId: "smion-estate",
  storageBucket: "smion-estate.appspot.com",
  messagingSenderId: "531838288416",
  appId: "1:531838288416:web:a89b72484298bd8a253245"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);