// firebase-config.js 範例
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-app.js";
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqMyinfY5lU_xiGaYU4vuHZrw91wR7BKc",
  authDomain: "trpg-nfc-system.firebaseapp.com",
  projectId: "trpg-nfc-system",
  storageBucket: "trpg-nfc-system.firebasestorage.app",
  messagingSenderId: "695423542715",
  appId: "1:695423542715:web:1acfcca9a908b7213b509e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 必須把這些函式 export 出去，combat.html 才抓得到！
export { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc };
