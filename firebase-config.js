// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, getDoc, updateDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 請替換為你從 Firebase Console 取得的設定
const firebaseConfig = {
  apiKey: "AIzaSyDqMyinfY5lU_xiGaYU4vuHZrw91wR7BKc",
  authDomain: "trpg-nfc-system.firebaseapp.com",
  projectId: "trpg-nfc-system",
  storageBucket: "trpg-nfc-system.firebasestorage.app",
  messagingSenderId: "695423542715",
  appId: "1:695423542715:web:1acfcca9a908b7213b509e"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { doc, getDoc, updateDoc, onSnapshot };