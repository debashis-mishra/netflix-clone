import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyA--58DB2QmnzdSiUK44YRXFUDpxKKn9DE',
    authDomain: 'netflix-2c2eb.firebaseapp.com',
    projectId: 'netflix-2c2eb',
    storageBucket: 'netflix-2c2eb.appspot.com',
    messagingSenderId: '1058172779904',
    appId: '1:1058172779904:web:649f38905ef0e0f3195565',
    measurementId: 'G-EEEMKDW02W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);