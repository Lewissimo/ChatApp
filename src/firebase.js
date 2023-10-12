import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDFkByipUgUoOsVeZqRayL2SWD_hP4Zolo",
  authDomain: "chatapp-8f294.firebaseapp.com",
  projectId: "chatapp-8f294",
  storageBucket: "chatapp-8f294.appspot.com",
  messagingSenderId: "321234127615",
  appId: "1:321234127615:web:b56f0a596cd1c7aef21aca",
  measurementId: "G-KQBYT891JY"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();