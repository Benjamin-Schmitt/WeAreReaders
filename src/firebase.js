import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtaa5FLSoBFWAg08dwFEMs0w_5ezoPuys",
  authDomain: "we-are-readers.firebaseapp.com",
  projectId: "we-are-readers",
  storageBucket: "we-are-readers.appspot.com",
  messagingSenderId: "1018810434067",
  appId: "1:1018810434067:web:99911e650eac66a75675e6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'Users');

// get collection data
getDocs(colRef)
  .then((snapshopt) => {
    let users = [];
    snapshopt.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
    console.log(users)
  })
  .catch(err => console.log(err))