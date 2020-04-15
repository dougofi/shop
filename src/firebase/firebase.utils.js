import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCwPP5WsYf2aEjqLtrywkFNc6bnivqbhlY",
  authDomain: "shop-9beca.firebaseapp.com",
  databaseURL: "https://shop-9beca.firebaseio.com",
  projectId: "shop-9beca",
  storageBucket: "shop-9beca.appspot.com",
  messagingSenderId: "532844396872",
  appId: "1:532844396872:web:a6df20ad772400ec20337d",
  measurementId: "G-ZRNGCL7ZLQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
