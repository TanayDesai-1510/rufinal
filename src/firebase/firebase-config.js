import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrgGUJUmUivKDe67Uar1RdNIaY7nxKBpk",
  authDomain: "rutgers-onestop.firebaseapp.com",
  projectId: "rutgers-onestop",
  storageBucket: "rutgers-onestop.appspot.com",
  messagingSenderId: "332760606101",
  appId: "1:332760606101:web:6d978352980604aa0cc29c",
  measurementId: "G-4LSTWRRTQ8",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const FirebaseAuth = getAuth(app);
export const db = getFirestore(app);
