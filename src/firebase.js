// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjawOi2cINsQi5hzS9jjMl6FRGe3p2S9c",
  authDomain: "push-test-85964.firebaseapp.com",
  projectId: "push-test-85964",
  storageBucket: "push-test-85964.appspot.com",
  messagingSenderId: "561583622002",
  appId: "1:561583622002:web:4bd49cbfd55f7291c17feb",
  measurementId: "G-LN86VZCHCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);