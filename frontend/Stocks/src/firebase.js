// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXl7FPCct23NnbnRl5lGJamriP4ONpHrE",
  authDomain: "stocks-pack.firebaseapp.com",
  projectId: "stocks-pack",
  storageBucket: "stocks-pack.appspot.com",
  messagingSenderId: "1065694442987",
  appId: "1:1065694442987:web:61fb6caf928c1149e8d5ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;