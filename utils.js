/*** Réponse standard des requêtes SQL ***/
function getJSONResponse(error, result) {
    var statut = error ? 500 : 200;
    var json = {"status": statut, "error": error, "response": result}
    return JSON.stringify(json);
}

exports.getJSONResponse = getJSONResponse;