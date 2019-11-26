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


exports.getJSONResponse = getJSONResponse;
exports.getAll = getAll;
exports.getOne = getOne;