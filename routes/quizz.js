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

module.exports = router;