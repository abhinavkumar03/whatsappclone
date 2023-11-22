import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBweuDZDgZFt2NDwVgNoYLZ8C-fO-NEoKk",
    authDomain: "whatsappclone-baded.firebaseapp.com",
    projectId: "whatsappclone-baded",
    storageBucket: "whatsappclone-baded.appspot.com",
    messagingSenderId: "546231541242",
    appId: "1:546231541242:web:2a21157335f085d315d843",
    measurementId: "G-NYNBFMXV2H"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);