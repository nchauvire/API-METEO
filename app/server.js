#!/usr/bin/env node

var express  = require('express'),
	path	 = require('path');

//controllers
meteo = require('./controllers/meteo');

//application
var	app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'hbs');

//routes
app.use('/', meteo);



//public files
app.use(express.static(path.join(__dirname, '/../public')));

app.listen(8000);
module.exports = app;
