import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCDaWSsKVf5f-GGpuBdh0xUrodUmQcq-fs",
  authDomain: "filmyverse-42f7b.firebaseapp.com",
  projectId: "filmyverse-42f7b",
  storageBucket: "filmyverse-42f7b.appspot.com",
  messagingSenderId: "1004745840243",
  appId: "1:1004745840243:web:cee754850a66897a5efc06",
  measurementId: "G-KRZWH4NXJ7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;


