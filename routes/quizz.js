var express = require('express');
var utils = require('../utils');

var router = express.Router();

/*** GET All Quizz ***/
router.get('/', async function(req, res, next) {
  var sql = `SELECT * FROM quizz`;
  utils.getAll(res,sql);
});

/*** GET Quizz by ID ***/
router.get('/:id', function(req, res, next) {
  var sql = `SELECT * FROM quizz WHERE idquizz = ${req.params.id}`;
  utils.getOne(res,sql);
});

module.exports = router;