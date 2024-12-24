// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxG1fpZeK1FddSl_e6Jb2OSHpGOhV6fF4",
  authDomain: "food-clone-react.firebaseapp.com",
  projectId: "food-clone-react",
  storageBucket: "food-clone-react.firebasestorage.app",
  messagingSenderId: "871001273996",
  appId: "1:871001273996:web:10d4c5d5aca1d9c803eda9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
