import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPd88_vuK84Q9U4CUhVCgHgaIL7nxOBWA",
  authDomain: "apps-store-47f77.firebaseapp.com",
  projectId: "apps-store-47f77",
  storageBucket: "apps-store-47f77.firebasestorage.app",
  messagingSenderId: "928906980564",
  appId: "1:928906980564:web:27bd10d4af57df9f2cdf41",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
