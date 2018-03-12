import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB8yMdXfjQDjlQ7urR3aZ95sX0Zt8Wc3dI",
    authDomain: "athenticate-fcd53.firebaseapp.com",
    databaseURL: "https://athenticate-fcd53.firebaseio.com",
    projectId: "athenticate-fcd53",
    storageBucket: "",
    messagingSenderId: "646332842490"
};

export const firebaseApp = firebase.initializeApp(config);