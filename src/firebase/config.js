// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGEEFEuwaq8vWw8ypbMs3HsudupxkSz80",
  authDomain: "cambalaches-c7134.firebaseapp.com",
  projectId: "cambalaches-c7134",
  storageBucket: "cambalaches-c7134.appspot.com",
  messagingSenderId: "731503953053",
  appId: "1:731503953053:web:0d5d0f2b2d63939377c074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);