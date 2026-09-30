import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDqMyinfy5U_xiGaYU4vuHZrw91wR7BKc",
    authDomain: "trpg-nfc-system.firebaseapp.com",
    projectId: "trpg-nfc-system",
    storageBucket: "trpg-nfc-system.firebasestorage.app",
    messagingSenderId: "695423542715",
    appId: "1:695423542715:web:1acfcca908b7213b509e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { collection, onSnapshot, addDoc, deleteDoc, doc };
