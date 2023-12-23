import {
  getFirestore
} from "firebase/firestore";
import {
  initializeApp
} from 'firebase/app';
import { getStorage } from 'firebase/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFBH3rRT2JggdN77GqE89SZbNIw6S_piM",
  authDomain: "portfolio-d961c.firebaseapp.com",
  projectId: "portfolio-d961c",
  storageBucket: "portfolio-d961c.appspot.com",
  messagingSenderId: "313539639351",
  appId: "1:313539639351:web:ea5c0c8e956c75646227b2",
  measurementId: "G-1Z9ZT7LW0S"
};


// Initialize Firebase app
const app = initializeApp(firebaseConfig);
// Create Firestore instance
export const DB = getFirestore();
export const storage = getStorage(app);
export default app;