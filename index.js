/**
 * 
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    //Communicate with the PokeAPI
    magicapi = require('./magicapi.js'),
    //Generate messages for different situations
    pushInfo = require('./pushInfo.js'),
    //Communicate with Redis
    stateMachine = require('./state-machine.js'),
    app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response) {
  response.send('Hello There!')
});

app.post('/info', function(request, response) {
	var name = request.body.text.toLowerCase();
	pushInfo.getCardInfo(name)
	.then(
		function(chosenObject) {
			response.send(buildResponse(chosenObject.text + '\n' + chosenObject.spriteUrl));
		},
		function(err) {
			console.log(err);
			response.send(buildResponse("I don't think that's a real Magic card. "+err));
		}
	)
}) 