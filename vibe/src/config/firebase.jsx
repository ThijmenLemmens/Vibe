// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDz3KLhDON9ikQbbGOufzHBbIRUZYdZ-FQ",
    authDomain: "vibe-42d4f.firebaseapp.com",
    projectId: "vibe-42d4f",
    storageBucket: "vibe-42d4f.appspot.com",
    messagingSenderId: "1035204778980",
    appId: "1:1035204778980:web:7fa699338f7526c9dfc5f1",
    measurementId: "G-PHL8S2QFVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);