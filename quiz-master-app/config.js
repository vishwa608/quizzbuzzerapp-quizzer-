import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBbnH-SbIFFmB_35qkNxxmyXAEMflwrf7o",
    authDomain: "quizbuzzer2.firebaseapp.com",
    databaseURL: "https://quizbuzzer2.firebaseio.com",
    projectId: "quizbuzzer2",
    storageBucket: "quizbuzzer2.appspot.com",
    messagingSenderId: "194027305987",
    appId: "1:194027305987:web:b8f6e39645898659f02236",
    measurementId: "G-5ST61GYG7S"
  };

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()