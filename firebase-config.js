import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDqMyinfy51U_xiGAYU4vuHzrw91wR7BKc",
  authDomain: "trpg-nfc-system.firebaseapp.com",
  projectId: "trpg-nfc-system",
  storageBucket: "trpg-nfc-system.appspot.com",
  messagingSenderId: "695423542715",
  appId: "1:695423542715:web:1acfcca908b7213b509e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc };
