import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var firebase = require('firebase');

require('./assets/reset.css');
require('./assets/styles.css');

// Initialize Firebase
var config = {
	apiKey: "AIzaSyA-bJXT0dlPtW7kb5mHpmCzK2WBXfqDZr8",
	authDomain: "dating-app-954e8.firebaseapp.com",
	databaseURL: "https://dating-app-954e8.firebaseio.com",
	storageBucket: "dating-app-954e8.appspot.com",
	messagingSenderId: "610211788626"
};
firebase.initializeApp(config);	

ReactDOM.render(<App />, document.getElementById('container'));