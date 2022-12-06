// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxMMadhR2whoonxubvcZrdacZIh73WGB8",
  authDomain: "book-shop-368219.firebaseapp.com",
  projectId: "book-shop-368219",
  storageBucket: "book-shop-368219.appspot.com",
  messagingSenderId: "433469414000",
  appId: "1:433469414000:web:ab3ad9e091ab7959b9f2b5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)