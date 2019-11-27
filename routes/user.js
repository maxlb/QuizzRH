var express = require('express');
var utils = require('../utils');

var router = express.Router();

/*** GET All User ***/
router.get('/', async function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
  var sql = `SELECT 
              u.iduser,
              u.firstname,
              u.lastname,
              u.login,
              u.email,
              p.pseudo,
              p.location,
              p.birthdate,
              p.scoreDev,
              p.scoreNetwork,
              p.scoreArchi,
              p.scoreSocial,
              p.scoreGlobal,
              p.Github,
              p.scoreKnowledge
            FROM user u
              JOIN profil p on u.iduser = p.iduser`;
  await utils.getAll(sql)
          .then(jsonOK => { res.json(jsonOK) })
          .catch(jsonKO => { res.json(jsonKO) });
});

/*** GET last active Users ***/
router.get('/lastActive', async function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
  var sql = `SELECT 
              a.idUser,
              u.firstname,
              u.lastname,
              u.login,
              u.email,
              p.pseudo,
              p.location,
              p.birthdate,
              p.scoreDev,
              p.scoreNetwork,
              p.scoreArchi,
              p.scoreSocial,
              p.scoreGlobal,
              p.Github,
              p.scoreKnowledge
              COUNT(a.idQuizz) AS nbQuizz,
              MAX(a.creationDate) AS dateDernierQuizz,
              ROUND(AVG(a.score)) AS scoreMoyen
            FROM answered a
              JOIN user u on u.iduser = a.idUser
              JOIN profil p on u.iduser = p.iduser
            WHERE a.creationDate > DATE_SUB(CURRENT_DATE(), INTERVAL 1 MONTH)
            GROUP BY a.idUser`;
  await utils.getAll(sql)
          .then(jsonOK => { res.json(jsonOK) })
          .catch(jsonKO => { res.json(jsonKO) });
});

/*** GET User by ID ***/
router.get('/:id', async function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
  var sql = `SELECT 
              u.iduser,
              u.firstname,
              u.lastname,
              u.login,
              u.email,
              p.pseudo,
              p.location,
              p.birthdate,
              p.scoreDev,
              p.scoreNetwork,
              p.scoreArchi,
              p.scoreSocial,
              p.scoreGlobal,
              p.Github,
              p.scoreKnowledge
            FROM user u
              JOIN profil p on u.iduser = p.iduser
            WHERE u.iduser = ${req.params.id}`;
  await utils.getOne(sql)
          .then(jsonOK => { res.json(jsonOK) })
          .catch(jsonKO => { res.json(jsonKO) });
});

module.exports = router;