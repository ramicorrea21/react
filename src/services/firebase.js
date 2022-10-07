
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA5_QLJRpC-1HdIO5bquyW8Rl9aciQkcZI",
  authDomain: "templo-de-la-camiseta.firebaseapp.com",
  projectId: "templo-de-la-camiseta",
  storageBucket: "templo-de-la-camiseta.appspot.com",
  messagingSenderId: "845581838401",
  appId: "1:845581838401:web:0686d8a27b7f7f9f583ec0",
  measurementId: "G-ZYQM053MJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db