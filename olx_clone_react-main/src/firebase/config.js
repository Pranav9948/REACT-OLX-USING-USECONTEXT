import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxTsXg0d2DD7d3vRwdbqlzb3bJ-H-NECA",
  authDomain: "fir-baa97.firebaseapp.com",
  projectId: "fir-baa97",
  storageBucket: "fir-baa97.appspot.com",
  messagingSenderId: "886618402146",
  appId: "1:886618402146:web:398322e9a0c66b767c103b",
  measurementId: "G-PSC57YJDJG",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
