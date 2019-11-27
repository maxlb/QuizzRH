var express = require('express');
var utils = require('../utils');

var router = express.Router();

router.post('/chatbot', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    
    console.log(req.body);
    console.log(req.body.result.parameters["rating"]);
    console.log(req.body.result.parameters["comments"]);
    console.log(req.body.result.parameters["resort-location"]);

    res.status(200).json({
        speech: "Merci pour ces informations",
        displayText: "Merci pour ces informations",
        source: 'Système SummitRH'});
});

   module.exports = router;