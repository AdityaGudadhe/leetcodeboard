// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { GoogleAuthProvider, getAuth, EmailAuthProvider, GithubAuthProvider } from "firebase/auth";
import { FIREBASE_CONFIG } from "@/components/firebase-config"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = FIREBASE_CONFIG;


console.log(process.env.RANDOM_KEY)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

export { app , db, googleProvider, auth, githubProvider};