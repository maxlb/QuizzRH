var express = require('express');
var utils = require('../utils');

var router = express.Router();

router.post('/', async function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    var params = req.body.queryResult.outputContexts[0].parameters;
    var niveau = params.number;
    var profil = params.Jobs_profil;
    var rep = '';

    if(niveau > 100) {
        rep = `Le niveau maximum est 100 ! Veuillez en saisir un nouveau.`;
        res.status(200).json({ "fulfillmentText": rep });
    } else {
        await utils.getBestUserChatBot(profil)
                .then(jsonRep => {
                    var bestDev = jsonRep.response;
                    var url = ''
                    switch (profil) {
                        case 'Développeur':
                            url = 'dev'
                            break;
                        case 'Technicien Réseau':
                            url = 'tech'
                            break;
                        case 'Mixte':
                            url = 'mixte'
                            break;
                        default:
                            url = 'mixte'
                            break;
                    }
                    rep = `Voici notre meilleur profil ${profil} correspondant à votre demande :
                            ${bestDev.firstname}  ${bestDev.lastname} - ${bestDev.email} (Pseudo Summit Quizz : ${bestDev.pseudo}).
                                        
                            Vous pouvez consulter l'ensemble des profils proposés en vous rendant à l'adresse suivante : http://benoitjaouen.fr/home/${url}/${niveau} .
                            Merci d'avoir utilisé SummitRH !`;

                    res.status(200).json({ "fulfillmentText": rep });
                })
                .catch(err => { res.status(500).json({ "fulfillmentText": rep }); } );
    } 
});

module.exports = router;