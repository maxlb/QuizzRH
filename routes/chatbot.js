var express = require('express');
var utils = require('../utils');

var router = express.Router();

router.post('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    console.log(req.body.queryResult);
    console.log(req.body.queryResult.fulfillementMessages);

    res.json({
        speech: "Merci pour ces informations",
        displayText: "Merci pour ces informations",
        source: 'Système SummitRH'
    });
});

module.exports = router;