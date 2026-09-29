// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 您的專案設定
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

// 【重要】這行一定要寫，並且要 export 出去！
export const db = getFirestore(app);
