/*** Réponse standard des requêtes SQL ***/
function getJSONResponse(error, result) {
    var statut = error ? 500 : 200;
    var json = {"status": statut, "error": error, "response": result}
    return json;
}

/*** GET All  ***/
var getAll = async function(res,req) {
    global.connection.query(req, (err,rows) => { res.json(getJSONResponse(err,rows)); });
}

/*** GET One  ***/
function getOne(res,req) {
    global.connection.query(req, (err,rows) => { res.json(getJSONResponse(err,rows[0])); });
}


exports.getJSONResponse = getJSONResponse;
exports.getAll = getAll;
exports.getOne = getOne;