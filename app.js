var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
const Database = require('./db');

/*** Initialisation de l'application ***/
var app = express();
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/*** Connexion à la base de donnée ***/
app.use(function(req, res, next){
	var config = {
		host     : 'benoitjaouen.fr',
		user     : 'rh',
		password : 'S4fe_password',
		database : 'quizz_rh'
	}
	global.connection = new Database(config);
	next();
});

/*** Routes ***/
var indexRouter = require('./routes/index');
var quizzRouter = require('./routes/quizz');
var userRouter  = require('./routes/user');
var rhRouter    = require('./routes/rh');
var chatRouter  = require('./routes/chatbot');

/*** Routeur ***/
app.use('/'					, 	indexRouter);
app.use('/api-quizz'		, 	indexRouter);
app.use('/api-quizz/quizz'	, 	quizzRouter);
app.use('/api-quizz/user'	, 	userRouter);
app.use('/api-quizz/rh'		, 	rhRouter);
app.use('/api-quizz/chatbot', 	chatRouter);

module.exports = app;