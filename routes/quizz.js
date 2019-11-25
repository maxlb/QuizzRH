import { Router } from 'express';
import { getJSONResponse } from 'util'

var router = Router();

/*** GET All Quizz ***/
router.get('/', function(req, res, next) {
  global.connection.query('SELECT * from quizz', function (error, results, fields) {
    res.send(getJSONResponse(error,results));
  });
});

export default router;
