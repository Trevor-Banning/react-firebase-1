import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase-config";

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
