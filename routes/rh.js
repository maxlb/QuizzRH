var express = require('express');
var utils = require('../utils');

var router = express.Router();

/*** GET All RH ***/
router.get('/', async function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
  var sql = `SELECT 
              u.iduser,
              u.firstname,
              u.lastname,
              u.login,
              u.email,
              rh.company
            FROM user u
              JOIN rh on u.iduser = rh.iduser`;
  await utils.getAll(sql)
          .then(jsonOK => { res.json(jsonOK) })
          .catch(jsonKO => { res.json(jsonKO) });
});

/*** GET RH by ID ***/
router.get('/:id', async function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
  var sql = `SELECT 
              u.iduser,
              u.firstname,
              u.lastname,
              u.login,
              u.email,
              rh.company
            FROM user u
              JOIN rh on u.iduser = rh.iduser
            WHERE u.iduser = ${req.params.id}`;
  await utils.getOne(sql)
          .then(jsonOK => { res.json(jsonOK) })
          .catch(jsonKO => { res.json(jsonKO) });
});

module.exports = router;