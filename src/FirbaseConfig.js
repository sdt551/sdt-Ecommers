import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHgiy54AznKEaUduXHz6CuCeF_1_rReEg",
  authDomain: "sdt-ecommerse.firebaseapp.com",
  databaseURL: "https://sdt-ecommerse-default-rtdb.firebaseio.com",
  projectId: "sdt-ecommerse",
  storageBucket: "sdt-ecommerse.appspot.com",
  messagingSenderId: "576160971970",
  appId: "1:576160971970:web:94e721f1de48a80c7bcf5b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
