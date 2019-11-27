var express = require('express');
var utils = require('../utils');

var router = express.Router();

router.post('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    var params = req.body.queryResult.outputContexts[0].parameters;
    var niveau = params.number;
    var profil = params.Jobs_profil;
    var rep = '';

    if(niveau > 100) {
        rep = `Le niveau maximum est 100 ! Veuillez en saisir un nouveau.`;
    } else {
        rep = `Merci d'avoir utiliser ce chat, vous allez pouvoir consulter nos meilleurs ${profil} de niveau ${niveau}.
                Veuillez vous rendre à l'adresse suivante : `;
    }
    
    
    res.status(200).json({ "fulfillmentText": rep });
        
});
//"fulfillmentText": rep
module.exports = router;