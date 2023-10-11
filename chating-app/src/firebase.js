// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2K8EKkUtpxPfv8E-qBy9sx1_Xl0SltJw",
  authDomain: "chating-1pp.firebaseapp.com",
  projectId: "chating-1pp",
  storageBucket: "chating-1pp.appspot.com",
  messagingSenderId: "282400403724",
  appId: "1:282400403724:web:7ec9f2bc7c94abde175929"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();