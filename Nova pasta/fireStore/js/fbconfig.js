// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAET3wyU8V3MUquCyGHHgk4iT8wLpKR63s",
    authDomain: "tentativa1-80b3c.firebaseapp.com",
    projectId: "tentativa1-80b3c",
    storageBucket: "tentativa1-80b3c.appspot.com",
    messagingSenderId: "774171065429",
    appId: "1:774171065429:web:7689a38c3890ab0ff568dc",
    measurementId: "G-WR0WXXC93R"
  };
    // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
  
    // Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const pessoaRef = dbRef.child('avaliacaoip');

var storage = firebase.storage();
  
