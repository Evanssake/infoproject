/**
 *  Send out card information to slack.
 */

var magicapi = require('./magicapi.js');

module.exports= {}

module.exports.getCardInfo = function(cardName) {
	var cardJSONData = magicapi.getCardData(cardName)
	    cardData = JSON.parse(cardJSONData);
	return JSON.stringify(cardData);
}