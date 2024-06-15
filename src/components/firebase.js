// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to usse
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwtSaE0_pdikzx2vV0pPcrjaojWg4D7-g",
  authDomain: "login-auth-eed1b.firebaseapp.com",
  projectId: "login-auth-eed1b",
  storageBucket: "login-auth-eed1b.appspot.com",
  messagingSenderId: "129984175054",
  appId: "1:129984175054:web:a4b01e5deefc916124a99f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
