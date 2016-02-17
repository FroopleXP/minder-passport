// Requiring Dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mysql = require('');

// MySQL Config file
try {
	var db = require('./mysql_conn.js');
} catch (err) {
	console.log("Couldn't find the MySQL config file.");
}

// Setting up the App
app.set('view engine', 'jade');
app.use("/views", express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({ extended: true }));

// Setting up passport
passport.use(new localStrategy(
    function (username, password, done) {
        // MySQL Login
    }
));

app.get('/', function(req, res) {
    res.send("Welcome...");
});

// Starting the App
app.listen(1337);
