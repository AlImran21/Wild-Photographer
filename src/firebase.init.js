// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd8gvscAIZHoiCVVQ2GPmtAhQhoSq_7xg",
  authDomain: "my-assignment10-with-react.firebaseapp.com",
  projectId: "my-assignment10-with-react",
  storageBucket: "my-assignment10-with-react.appspot.com",
  messagingSenderId: "1026269474991",
  appId: "1:1026269474991:web:5d8592e164930d6b94645a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
