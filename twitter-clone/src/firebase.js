import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1YKfdiAvWyzzF-304anoUFTY0gtmdPrM",
  authDomain: "twitter-clone-f9f58.firebaseapp.com",
  projectId: "twitter-clone-f9f58",
  storageBucket: "twitter-clone-f9f58.appspot.com",
  messagingSenderId: "1013326002621",
  appId: "1:1013326002621:web:35f70440d1685439823ad4",
  measurementId: "G-ZB9W817EHG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
