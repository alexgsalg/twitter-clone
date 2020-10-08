import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA71T3Ts3C9e2fSO9NwGP3pi4qOPdGIO-U",
  authDomain: "twitter-clone-fde87.firebaseapp.com",
  databaseURL: "https://twitter-clone-fde87.firebaseio.com",
  projectId: "twitter-clone-fde87",
  storageBucket: "twitter-clone-fde87.appspot.com",
  messagingSenderId: "557636005692",
  appId: "1:557636005692:web:67b9197d3a98a2f54e7839",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
