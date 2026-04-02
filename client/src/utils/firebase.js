
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "interview-platform-14dbb.firebaseapp.com",
  projectId: "interview-platform-14dbb",
  storageBucket: "interview-platform-14dbb.firebasestorage.app",
  messagingSenderId: "413865119325",
  appId: "1:413865119325:web:f5fef1b13513e87c9507b4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}