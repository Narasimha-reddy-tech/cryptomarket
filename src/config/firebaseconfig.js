// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBPJTyghDv-_1ZiAWMKJNFakqO74V_Eiis",
  authDomain: "coin-market-88b80.firebaseapp.com",
  projectId: "coin-market-88b80",
  storageBucket: "coin-market-88b80.firebasestorage.app",
  messagingSenderId: "897528611524",
  appId: "1:897528611524:web:da9169c67c61790a3abf91",
  measurementId: "G-GFVE56MC56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth(app)
let googleProvider = new GoogleAuthProvider()

export { auth, googleProvider }