importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js"
);

firebase.initializeApp({
    apiKey: "AIzaSyAjawOi2cINsQi5hzS9jjMl6FRGe3p2S9c",
    authDomain: "push-test-85964.firebaseapp.com",
    projectId: "push-test-85964",
    storageBucket: "push-test-85964.appspot.com",
    messagingSenderId: "561583622002",
    appId: "1:561583622002:web:4bd49cbfd55f7291c17feb",
    measurementId: "G-LN86VZCHCN"
});

const messaging = firebase.messaging();

