import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAqptEW_d0_skgHvqe8BeoX60_2jKqbTOg",
    authDomain: "linkedin-clone-13ba4.firebaseapp.com",
    projectId: "linkedin-clone-13ba4",
    storageBucket: "linkedin-clone-13ba4.appspot.com",
    messagingSenderId: "659254777105",
    appId: "1:659254777105:web:ec93a9760b483ca7f428b0",
    measurementId: "G-8PH907XPML",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
