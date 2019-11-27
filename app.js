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
app.use('/api-quizz/chatbot', 	chatRouter);
app.use('/'					, 	indexRouter);
app.use('/api-quizz'		, 	indexRouter);
app.use('/api-quizz/quizz'	, 	quizzRouter);
app.use('/api-quizz/user'	, 	userRouter);
app.use('/api-quizz/rh'		, 	rhRouter);

/*
app.post('/api-quizz/chatbot', (req, res) => {
    console.log('ok');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    console.log(req.body);

    res.json({
        speech: "Merci pour ces informations",
        displayText: "Merci pour ces informations",
        source: 'Système SummitRH'
    });
});
*/
module.exports = app;