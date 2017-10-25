import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBMPGRC047msddlu6hgYwmCJlzqAiPpXn0",
    authDomain: "labor-manager.firebaseapp.com",
    databaseURL: "https://labor-manager.firebaseio.com",
    projectId: "labor-manager",
    storageBucket: "labor-manager.appspot.com",
    messagingSenderId: "43262426699"
  };

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider();