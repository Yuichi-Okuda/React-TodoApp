// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
// import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQrgxF5th2exAyMN4Lp9saA0jotfCl_Hg",
    authDomain: "todo-app-f567c.firebaseapp.com",
    databaseURL: "https://todo-app-f567c.firebaseio.com",
    projectId: "todo-app-f567c",
    storageBucket: "todo-app-f567c.appspot.com",
    messagingSenderId: "683630679704",
    appId: "1:683630679704:web:726cc411ed39137779a2ed"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db }