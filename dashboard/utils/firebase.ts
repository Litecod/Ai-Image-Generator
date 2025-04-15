import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY || ""

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "cartoonify-3d-c7bd2.firebaseapp.com",
  projectId: "cartoonify-3d-c7bd2",
  storageBucket: "cartoonify-3d-c7bd2.firebasestorage.app",
  messagingSenderId: "368671595831",
  appId: "1:368671595831:web:95969531735abbed874eb2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
