import firebase from 'firebase/app';
import 'firebase/database';

if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyC7J-kb98pztsrbkXht6j2y7iwqw-eOwHM",
        authDomain: "keep-35528.firebaseapp.com",
        databaseURL: "https://keep-35528.firebaseio.com",
        projectId: "keep-35528",
        storageBucket: "keep-35528.appspot.com",
        messagingSenderId: "972864460198",
        appId: "1:972864460198:web:7de49396d02de473696b67",
        measurementId: "G-XLE98K07JW"
    };

    firebase.initializeApp(config);
}

const db = firebase.database();

export { db };