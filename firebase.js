import { initializeApp,getApps,getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyAX77wDx5wIN8FxGT3yNx3pdJ8rl9ez_KI",
  authDomain: "instaq-43b45.firebaseapp.com",
  projectId: "instaq-43b45",
  storageBucket: "instaq-43b45.appspot.com",
  messagingSenderId: "357260784212",
  appId: "1:357260784212:web:e69a5d32e11802dfc3b3c1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export {
    app,
    db,
    storage
};