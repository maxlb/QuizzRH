var express = require('express');
var user = require('./user');

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
        if (profil=="Développeur"){
                    var bestDev=user.getDevChatBot;
                    rep = `Merci d'avoir utiliser ce chat, voici notre meilleur profil ${profil} correspondant à votre demande :
                    Prenom : ${bestDev.firstname} 
                    Nom : ${bestDev.lastname}
                    E-Mail : ${bestDev.email}
                    Pseudo SummitQuizz : ${bestDev.pseudo}
                    Vous pouvez consulter l'ensemble des profils proposés en vous rendant à l'adresse suivante : `;
        }

        if (profil=="Technicien Réseau"){
            var bestDev=user.getResChatBot;
            rep = `Merci d'avoir utiliser ce chat, voici notre meilleur profil ${profil} correspondant à votre demande :
            Prenom : ${bestDev.firstname} 
            Nom : ${bestDev.lastname}
            E-Mail : ${bestDev.email}
            Pseudo SummitQuizz : ${bestDev.pseudo}
            Vous pouvez consulter l'ensemble des profils proposés en vous rendant à l'adresse suivante : `;
        }

        if (profil=="Mixte"){
            var bestDev=user.getMixteChatBot;
            rep = `Merci d'avoir utiliser ce chat, voici notre meilleur profil ${profil} correspondant à votre demande :
            Prenom : ${bestDev.firstname} 
            Nom : ${bestDev.lastname}
            E-Mail : ${bestDev.email}
            Pseudo SummitQuizz : ${bestDev.pseudo}
            Vous pouvez consulter l'ensemble des profils proposés en vous rendant à l'adresse suivante : `;
        }
    }
    
    
    
    res.status(200).json({ "fulfillmentText": rep });
        
});
//"fulfillmentText": rep
module.exports = router;