// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // <-- Tambahkan ini

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBVListdg7LNDAhza6edQb6jYxJLGDkgY",
  authDomain: "my-portfolio-7adf5.firebaseapp.com",
  projectId: "my-portfolio-7adf5",
  storageBucket: "my-portfolio-7adf5.firebasestorage.app",
  messagingSenderId: "453210385994",
  appId: "1:453210385994:web:7e866b72f0008420eb00b3",
  measurementId: "G-LCSM0QM65S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inisialisasi dan Ekspor Firestore Database
export const db = getFirestore(app); // <-- Tambahkan ini