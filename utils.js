/*** Réponse standard des requêtes SQL ***/
var getJSONResponse = function(error, result) {
    var statut = error ? 500 : 200;
    var json = {"status": statut, "error": error, "response": result}
    return json;
}

/*** GET All  ***/
var getAll = async(req) => {
    return new Promise( ( resolve, reject ) => {
        global.connection.query(req)
            .then(rows => { resolve(getJSONResponse(null,rows)); })
            .catch(err => { return reject(getJSONResponse(err,null)); });
    } );
}

/*** GET One  ***/
var getOne = async(req) => {
    return new Promise( ( resolve, reject ) => {
        global.connection.query(req)
            .then(rows => { resolve(getJSONResponse(null,rows[0])); })
            .catch(err => { return reject(getJSONResponse(err,null)); });
    } );
}

/*** GET All Chatbot ***/
async function getBestUserChatBot(profil) {
    var sqlCol = ''
    switch (profil) {
        case 'Développeur':
            sqlCol = 'ScoreDev'
            break;
        case 'Technicien Réseau':
            sqlCol = 'scoreNetwork'
            break;
        case 'Mixte':
            sqlCol = 'ScoreGlobal'
            break;
        default:
            sqlCol = 'ScoreGlobal'
            break;
    }

    var sql = `SELECT 
                u.firstname,
                u.lastname,
                u.email,
                p.pseudo
              FROM user u
                JOIN profil p on u.iduser = p.iduser
                ORDER BY p.${sqlCol} DESC`
    
    return new Promise( ( resolve, reject ) => {          
        getOne(sql)
            .then(jsonOK => { resolve(jsonOK) })
            .catch(jsonKO => { return reject(jsonKO) });
    });
  };

exports.getJSONResponse = getJSONResponse;
exports.getAll = getAll;
exports.getOne = getOne;
exports.getBestUserChatBot = getBestUserChatBot;