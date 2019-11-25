var express = require('express');
var utils = require('../utils');

var router = express.Router();

/*** GET All RH ***/
router.get('/', async function(req, res, next) {
  var sql = `SELECT 
              u.iduser,
              u.firstname,
              u.lastname,
              u.login,
              u.email,
              Rh.company
            FROM User u
              JOIN Rh on u.iduser = Rh.iduser`;
  utils.getAll(res,sql);
});

/*** GET RH by ID ***/
router.get('/:id', function(req, res, next) {
  var sql = `SELECT 
              u.iduser,
              u.firstname,
              u.lastname,
              u.login,
              u.email,
              Rh.company
            FROM User u
              JOIN Rh on u.iduser = Rh.iduser
            WHERE u.iduser = ${req.params.id}`;
  utils.getOne(res,sql);
});

module.exports = router;