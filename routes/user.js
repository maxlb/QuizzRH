var express = require('express');
var utils = require('../utils');

var router = express.Router();

/*** GET All User ***/
router.get('/', async function(req, res, next) {
  var sql = `SELECT * FROM User`;
  utils.getAll(res,sql);
});

/*** GET User by ID ***/
router.get('/:id', function(req, res, next) {
  var sql = `SELECT * FROM User WHERE iduser = ${req.params.id}`;
  utils.getOne(res,sql);
});

module.exports = router;