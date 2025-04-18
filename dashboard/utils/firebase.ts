import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCA340GgyECPoLKjFnTgVLPannWyLw_GIY"

const firebaseConfig = {
  apiKey: "AIzaSyCA340GgyECPoLKjFnTgVLPannWyLw_GIY",
  authDomain: "cartoonify-3d.firebaseapp.com",
  projectId: "cartoonify-3d",
  storageBucket: "cartoonify-3d.firebasestorage.app",
  messagingSenderId: "347736606258",
  appId: "1:347736606258:web:b7a4cf0e7f0a1bb2011e2b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
