var express = require('express');
var utils = require('../utils');

var router = express.Router();

/*** GET All User ***/
router.get('/', async function(req, res, next) {
  var sql = `SELECT 
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
              p.Github
            FROM User u
              JOIN Profil p on u.iduser = p.iduser`;
  utils.getAll(res,sql);
});

/*** GET User by ID ***/
router.get('/:id', function(req, res, next) {
  var sql = `SELECT 
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
              p.Github
            FROM User u
              JOIN Profil p on u.iduser = p.iduser
            WHERE u.iduser = ${req.params.id}`;
  utils.getOne(res,sql);
});

module.exports = router;