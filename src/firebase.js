import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyClJfbUwHi4MEBh86q6WE_URJJyZcKyUwc",
    authDomain: "fir-fc614.firebaseapp.com",
    projectId: "fir-fc614",
    storageBucket: "fir-fc614.appspot.com",
    messagingSenderId: "272773704122",
    appId: "1:272773704122:web:64c931d78239d5c19ad583",
    measurementId: "G-ERKFKW5HYM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };