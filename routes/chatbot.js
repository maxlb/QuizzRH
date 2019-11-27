var express = require('express');
var utils = require('../utils');

var router = express.Router();

router.post('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    var rep = '';
    var params = req.body.queryResult.outputContexts[0].parameters;

    if (params) {
        var niveau = params.number;
        var profil = params.Jobs_profil;
        if (niveau && profil) {
            console.log(`Chat reçu : ${profil} de niveau ${niveau}`);
            var rep = `Merci d'avoir utiliser ce chat, vous allez pouvoir consulter nos meilleurs ${profil} de niveau ${niveau}.`;
        }
    }

    res.json({
        speech: rep,
        displayText: rep,
        source: 'Système SummitRH'
    });
});

module.exports = router;