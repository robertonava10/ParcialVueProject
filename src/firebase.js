import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCu3Du4XVhf3eyUu0cLHvWZrjdzEBPijUw",
    authDomain: "vue-segundoparcial.firebaseapp.com",
    databaseURL: "https://vue-segundoparcial.firebaseio.com",
    projectId: "vue-segundoparcial",
    storageBucket: "vue-segundoparcial.appspot.com",
    messagingSenderId: "29822720634",
    appId: "1:29822720634:web:a0e21fe403f212763739c3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db= firebase.firestore();