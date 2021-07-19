import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";

firebase.initializeApp({
  apiKey: "AIzaSyDKDJSVbTovc1lpDifmPrLY9px303wGg0w",
  authDomain: "movielist-bf6ca.firebaseapp.com",
  projectId: "movielist-bf6ca",
  storageBucket: "movielist-bf6ca.appspot.com",
  messagingSenderId: "717373188149",
  appId: "1:717373188149:web:aba630b827a5038650297c",
  measurementId: "G-ZPDWR7K8B6"
});

export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default firebase;
