import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported  } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2QXC2TzXMpl5Ds0HwYvME17pqSH3J2BI",
  authDomain: "vibe-13473.firebaseapp.com",
  projectId: "vibe-13473",
  storageBucket: "vibe-13473.appspot.com",
  messagingSenderId: "229282386891",
  appId: "1:229282386891:web:7dfd974e88a2586ef95c4e",
  measurementId: "G-HBK5Y8SDYH"
};

const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);