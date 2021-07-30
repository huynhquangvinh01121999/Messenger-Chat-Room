import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDA62UbJHQoCIUuM7qq0PSmyPZexKUElsM",
  authDomain: "chatapp-a6dce.firebaseapp.com",
  projectId: "chatapp-a6dce",
  storageBucket: "chatapp-a6dce.appspot.com",
  messagingSenderId: "331649711619",
  appId: "1:331649711619:web:ddd4f65075a3e8e03a1836",
  measurementId: "G-QHPQ4Y9YJ5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

// // cấu hình url Emulators: Authentication
// auth.useEmulator("http://localhost:9099");

// // kiểm tra url có phải là localhost ko???
// if (window.location.hostname === "localhost") {
  
//   // cấu hình url Emulators: Firestore
//   db.useEmulator("localhost", "8080");
// }

export { auth, db };
export default firebase;
