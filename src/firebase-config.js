import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBvPwPTVY6NSyMv-i-AAmzYRSzo0Ls-CVw",
    authDomain: "crimespotter-56617.firebaseapp.com",
    projectId: "crimespotter-56617",
    storageBucket: "crimespotter-56617.appspot.com",
    messagingSenderId: "753039283250",
    appId: "1:753039283250:web:8eeb858414742b1708982b",
    measurementId: "G-9ZY5B3LFCQ"
  };

  const app = initializeApp(firebaseConfig);

 export const db =  getFirestore(app);