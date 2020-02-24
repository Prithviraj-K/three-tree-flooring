import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCbriRiVs8W85mC_D52hqp-dbZMBPj6Zn0",
    authDomain: "three-tree-flooring-5e85a.firebaseapp.com",
    databaseURL: "https://three-tree-flooring-5e85a.firebaseio.com",
    projectId: "three-tree-flooring-5e85a",
    storageBucket: "three-tree-flooring-5e85a.appspot.com",
    messagingSenderId: "867331541772",
    appId: "1:867331541772:web:a1ed268f4de27fd3585729",
    measurementId: "G-EL4Z5PXNTE"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;