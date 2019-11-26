var express = require('express');
var utils = require('../utils');

var router = express.Router();

/*** GET All Quizz ***/
router.get('/', async function(req, res, next) {
  var sql = `SELECT * FROM quizz`;
  await utils.getAll(sql)
          .then(jsonOK => { res.json(jsonOK) })
          .catch(jsonKO => { res.json(jsonKO) });
});

/*** GET Quizz by ID ***/
router.get('/:id', async function(req, res, next) {
  var sql = `SELECT * FROM quizz WHERE idquizz = ${req.params.id}`;
  await utils.getOne(sql)
          .then(jsonOK => { res.json(jsonOK) })
          .catch(jsonKO => { res.json(jsonKO) });
});

/*
router.post('/answered/:id', async function(req, res){ 
  // Autoriser l'accès
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods','POST');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (req.body) {
		console.log(`Server - Infos reçues : ${req.body}`);
    var sql = `SELECT * FROM quizz WHERE idquizz = ${req.params.id}`;
    /*
    utils.post(res,sql);
		// Appel et réponse de la statistique
		await stats.getStat(req.params.stat, req.body.token, req.body.orga, req.body.login)
						.then(obj => { res.json( { ok:true , data:obj } )} )
						.catch(err => res.json( { ok:false , error:err } ));
	} else {
		res.json( utils.getJSONResponse('Aucune données reçues...',null) );
  }
});*/

module.exports = router;