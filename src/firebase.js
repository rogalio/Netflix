import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJf_lVlnMx6jC7Y8rO_3EqGI32MeHSiWw",
  authDomain: "netflix-firebase-e06b7.firebaseapp.com",
  projectId: "netflix-firebase-e06b7",
  storageBucket: "netflix-firebase-e06b7.appspot.com",
  messagingSenderId: "759455541004",
  appId: "1:759455541004:web:e53fd9ef47c8b462c58b29",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
