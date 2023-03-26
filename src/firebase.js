import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCNNvfIuHSexdPd6OoydVyE_tguJHSA7NQ",
  authDomain: "chatapp-f81d0.firebaseapp.com",
  projectId: "chatapp-f81d0",
  storageBucket: "chatapp-f81d0.appspot.com",
  messagingSenderId: "925104862179",
  appId: "1:925104862179:web:a279bf3a4b8cb9a19326d6",
  measurementId: "G-3R4H9965DZ"
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage=getStorage();
export const db=getFirestore();