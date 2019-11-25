import express, { json, urlencoded, static } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { createConnection } from "mysql";

/*** Initialisation de l'application ***/
var app = express();
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(static(join(__dirname, 'public')));

/*** Connexion à la base de donnée ***/
app.use(function(req, res, next){
	global.connection = createConnection({
		host     : 'localhost',
		user     : 'quizzrh',
		password : 'azerty123',
		database : 'quizzrh_db'
	});
	connection.connect();
	next();
});

/*** Routes ***/
import indexRouter from './routes/index';
import quizzRouter from './routes/quizz';

/*** Routeur ***/
app.use('/', indexRouter);
app.use('/api/v1/quizz', quizzRouter);




export default app;