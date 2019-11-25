var express = require('express');
var utils = require('../utils');

var router = express.Router();

/*** GET All Quizz ***/
router.get('/', function(req, res, next) {
  global.connection.query('SELECT * FROM quizz', function (error, results, fields) {
    res.send(utils.getJSONResponse(error,results));
  });
});

/*** GET Quizz by ID ***/
router.get('/:id/', function(req, res, next) {
  global.connection.query('SELECT * FROM quizz WHERE idquizz = ' + req.params.id, function (error, results, fields) {
    res.send(utils.getJSONResponse(error,results[0]));
  });
});

module.exports = router;
