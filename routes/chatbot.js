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
                    rep = `Merci d'avoir utiliser ce chat, voici notre meilleur profil ${profil} correspondant à votre demande :
                            Prenom : ${bestDev.firstname}
                            Nom : ${bestDev.lastname}
                            E-Mail : ${bestDev.email}
                            Pseudo SummitQuizz : ${bestDev.pseudo}
                            Vous pouvez consulter l'ensemble des profils proposés en vous rendant à l'adresse suivante : http://benoitjaouen.fr/${url}/${niveau}`;

                    res.status(200).json({ "fulfillmentText": rep });
                })
                .catch(err => { res.status(500).json({ "fulfillmentText": rep }); } );
    } 
});

module.exports = router;