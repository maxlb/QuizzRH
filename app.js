var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');

/*** Initialisation de l'application ***/
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*** Connexion à la base de donnée ***/
app.use(function(req, res, next){
	global.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'quizzrh',
		password : 'azerty123',
		database : 'quizzrh_db'
	});
    connection.connect();
	next();
});

/*** Routes ***/
var indexRouter = require('./routes/index');
var quizzRouter = require('./routes/quizz');

/*** Routeur ***/
app.use('/', indexRouter);
app.use('/api/v1/quizz', quizzRouter);
app.use('/api/v1/quizz/:id', quizzRouter);




module.exports = app;