// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD1KjBJ_d5JlHomYwBBisjmsHS6_DeyM4",
  authDomain: "leetcodeboard-ce5fd.firebaseapp.com",
  projectId: "leetcodeboard-ce5fd",
  storageBucket: "leetcodeboard-ce5fd.appspot.com",
  messagingSenderId: "89336516867",
  appId: "1:89336516867:web:e4ba8682c625936fd71936",
  measurementId: "G-B6SDDLR0S3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };