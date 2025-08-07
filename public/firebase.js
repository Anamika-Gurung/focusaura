// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDFol70LmypOVzsKLDGPoddUzjBtswU7pc",
    authDomain: "focusaura-df4b6.firebaseapp.com",
    projectId: "focusaura-df4b6",
    storageBucket: "focusaura-df4b6.firebasestorage.app",
    messagingSenderId: "1063244800937",
    appId: "1:1063244800937:web:9911241a4dd0bb48825ab8",
    measurementId: "G-21HSFQ7WDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };

