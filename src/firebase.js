import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";  
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDJ0rO2SM6sLaVOZQC7gsXjq4qMJH-FVm0",
  authDomain: "chat-240aa.firebaseapp.com",
  projectId: "chat-240aa",
  storageBucket: "chat-240aa.appspot.com",
  messagingSenderId: "671154962267",
  appId: "1:671154962267:web:8cfd3b8c48faf0f027a47e",
  measurementId: "G-MCH7DL14LG"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();