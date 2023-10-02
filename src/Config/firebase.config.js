// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtDCQH_l74n8KXRz-JTYkQWvcZiAv9kcg",
    authDomain: "dragon-news-7209f.firebaseapp.com",
    projectId: "dragon-news-7209f",
    storageBucket: "dragon-news-7209f.appspot.com",
    messagingSenderId: "977796309163",
    appId: "1:977796309163:web:20a9a66966e7b93e58d7ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;
