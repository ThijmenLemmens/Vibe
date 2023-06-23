import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported  } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB25LZyFG0dxMe2p36fTW0DO8flO6S1-4Q",
    authDomain: "vibe-e09b0.firebaseapp.com",
    projectId: "vibe-e09b0",
    storageBucket: "vibe-e09b0.appspot.com",
    messagingSenderId: "444758274838",
    appId: "1:444758274838:web:a685d382a10a660aa99637",
    measurementId: "G-8JT1MM4FRB"
};

const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);