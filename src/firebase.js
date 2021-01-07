import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8GJesHgK76zWkKjcajJiAW5w_KMMjYwY",
  authDomain: "linkedin-clone-9cc08.firebaseapp.com",
  projectId: "linkedin-clone-9cc08",
  storageBucket: "linkedin-clone-9cc08.appspot.com",
  messagingSenderId: "308296801147",
  appId: "1:308296801147:web:4d548b6c00f8419664bbde",
  measurementId: "G-05DT2Y9S15",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
