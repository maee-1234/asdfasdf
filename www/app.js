
import firebase from "firebase/app";

var express = require('express');
var app = express();
const firebaseConfig = {
  apiKey: "AIzaSyCk85sDegQK0mhbwU5Fid8QnazZE_4DoQU",
  authDomain: "coherent-vertex-304705.firebaseapp.com",
  projectId: "coherent-vertex-304705",
  storageBucket: "coherent-vertex-304705.appspot.com",
  messagingSenderId: "170210034902",
  appId: "1:170210034902:web:bae965a34ff0bf9a087577",
  measurementId: "G-Z0Q2D7S2CM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


/* GET home page. */
app.get('/users', function (req, res) {
  res.json({message:"you click the button"})
})

module.exports = app;
