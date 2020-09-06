import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBHilDkEWA4fSv3BtvdE2kuGoKGKP-nP8s",
  authDomain: "m-city-8c2df.firebaseapp.com",
  databaseURL: "https://m-city-8c2df.firebaseio.com",
  projectId: "m-city-8c2df",
  storageBucket: "m-city-8c2df.appspot.com",
  messagingSenderId: "693464002428",
  appId: "1:693464002428:web:fc682fb71fe0723e2a7ef9",
  measurementId: "G-TF1W2YQCF6",
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");

export { firebase, firebaseMatches };
