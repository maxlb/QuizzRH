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
		host     : 'benoitjaouen.fr',
		user     : 'rh',
		password : 'S4fe_password',
		database : 'quizz_rh'
	});
    connection.connect();
	next();
});

/*** Routes ***/
var indexRouter = require('./routes/index');
var quizzRouter = require('./routes/quizz');
var userRouter = require('./routes/user');
var rhRouter = require('./routes/rh');

/*** Routeur ***/
app.use('/', indexRouter);
app.use('/api/v1/quizz', quizzRouter);
app.use('/api/v1/quizz/:id', quizzRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/user/:id', userRouter);
app.use('/api/v1/rh', rhRouter);
app.use('/api/v1/rh/:id', rhRouter);



module.exports = app;