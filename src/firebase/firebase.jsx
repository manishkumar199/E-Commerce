import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey);

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "e-com-shop-dd551.firebaseapp.com",
    projectId: "e-com-shop-dd551",
    storageBucket: "e-com-shop-dd551.firebasestorage.app",
    messagingSenderId: "228633759043",
    appId: "1:228633759043:web:ce086c091ca81b3dbc33f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore(app);;

export { app, auth, db };