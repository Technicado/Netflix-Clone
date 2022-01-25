import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEf-aW-BDbjfGSL3FED7ttKgDpYq87SSM",
  authDomain: "netflix-clone-95182.firebaseapp.com",
  projectId: "netflix-clone-95182",
  storageBucket: "netflix-clone-95182.appspot.com",
  messagingSenderId: "55041961249",
  appId: "1:55041961249:web:61995c6a779a0a995d2260",
  measurementId: "G-HN9HPJE7DJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
