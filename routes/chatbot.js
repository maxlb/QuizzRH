var express = require('express');
var utils = require('../utils');

var router = express.Router();

router.post('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    var niveau = req.body.queryResult.outputContexts[0].parameters.number;
    var profil = req.body.queryResult.outputContexts[0].parameters.Jobs_profil
    console.log(`Chat reçu : ${profil} de niveau ${niveau}`);

    var rep = `Merci pour ces informations, vous allez apercevoir nos meilleurs ${profil} de niveau ${niveau}`
    res.json({
        speech: rep,
        displayText: rep,
        source: 'Système SummitRH'
    });
});

module.exports = router;