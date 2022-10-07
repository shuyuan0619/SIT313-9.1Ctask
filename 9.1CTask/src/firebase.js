// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdrwQlgOgZmqrJmdU8X_Nj-iijMxtAUSU",
  authDomain: "wsytask-6f6c8.firebaseapp.com",
  projectId: "wsytask-6f6c8",
  storageBucket: "wsytask-6f6c8.appspot.com",
  messagingSenderId: "1024257094710",
  appId: "1:1024257094710:web:95eb1961d26f2a2d525497",
  measurementId: "G-XB60X2F7J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default getFirestore();