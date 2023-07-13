import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import type { FirebaseApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyChu-_Ow0RqMWW8JIFcXCY3Pclc8sok7x4",
  authDomain: "pet-society-94cf8.firebaseapp.com",
  projectId: "pet-society-94cf8",
  storageBucket: "pet-society-94cf8.appspot.com",
  messagingSenderId: "1072902215059",
  appId: "1:1072902215059:web:a11c08fc8f78e83f560466",
};

// Initialize Firebase
const app : FirebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

