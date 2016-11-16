const express = require('express');
const path = require('path');
var admin = require('firebase-admin');

const port = process.env.PORT || 8080;

// Initialize Firebase
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://dating-app-954e8.firebaseio.com"
});

//Initialize Express App
const app = express();
app.use(express.static(path.join(__dirname, '../client/build')));

app.listen(port, function() {
	console.log("server started on port "+port);
});


