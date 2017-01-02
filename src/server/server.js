var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//controllers


//Express request pipeline
var app = express();
console.log(__dirname);
app.use(express.static(path.join(__dirname,"../client/build")));
console.log(bodyParser.json());
app.use(bodyParser.json());

app.listen(8080, function(){
	console.log("Started listening on port", 8080);
});

//Connect to mongodb database
mongoose.connect("mongodb://localhost/");