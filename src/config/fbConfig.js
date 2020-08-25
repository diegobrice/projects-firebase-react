import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB06PhlEhTs5U8a3ZSZInACleA4EBeoCrA",
  authDomain: "platziblog-de4d2.firebaseapp.com",
  databaseURL: "https://platziblog-de4d2.firebaseio.com",
  projectId: "platziblog-de4d2",
  storageBucket: "platziblog-de4d2.appspot.com",
  messagingSenderId: "125536156892",
  appId: "1:125536156892:web:dcbc04660f2bdeddedc819",
  measurementId: "G-RQ31W6NB7D",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
