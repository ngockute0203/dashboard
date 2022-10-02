import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKP5Lx-suakdFws-GrBJWLtlkuy7XjgZQ",
  authDomain: "dashboard-915c8.firebaseapp.com",
  // databaseURL: "https://dashboard-915c8-default-rtdb.firebaseio.com",
  projectId: "dashboard-915c8",
  storageBucket: "dashboard-915c8.appspot.com",
  messagingSenderId: "693637525089",
  appId: "1:693637525089:web:6685b8f257f9a204bf0420",
  measurementId: "G-B2Z5PR419F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const dbf=firebaseApp.firestore();
const dbf = getFirestore(firebaseApp);

export default dbf;
