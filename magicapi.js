/**
 *  Connects to https://mtgapi.com to get card information.
 */

var request = require('request'),
    Q = require('q');

module.exports= {}

module.exports.getCardInfo = function(cardName) {
	var deferred = Q.defer();
	request("http://api.mtgapi.com/v2/cards?name="+cardName, function (error, response, body) {
		if(response.statusCode == 200) {
			deferred.resolve(JSON.parse(body));
		} else {
			deferred.reject(new Error("Error Getting Card Info"));
		}
	})
	return deferred.promise;
}

module.exports.getCardName = function(obj) {
	
}

module.exports.getCardManaCost = function(obj) {
	
}

module.exports.getCardRulesText = function(obj) {
	
}