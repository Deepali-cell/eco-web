import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHKS1vaaC7uJ8maQnGRALMngvnR3KJ2y8",
  authDomain: "eco-website-7f8e6.firebaseapp.com",
  projectId: "eco-website-7f8e6",
  storageBucket: "eco-website-7f8e6.appspot.com",
  messagingSenderId: "829546577866",
  appId: "1:829546577866:web:ed328bea7ebdcdc0bad933",
  measurementId: "G-W8WPMYYPLF",
};

// Initialize
const app = initializeApp(firebaseConfig);

// Firestore (Cloud Database)
const fireDB = getFirestore(app);

// Realtime Database (if using this instead of Firestore)
// export const realDb = getDatabase(app);

// for authentication
const auth = getAuth(app);

export { fireDB, auth };
