"use strict";

let salesforce = require("./salesforce");

exports.queryDeals = (params, session, response) => {
	console.log('Entered queryDeals');
	console.log('Params: ' + JSON.stringify(params));
	let city = params['conversation-city'];
	console.log('City: '  + city);
	salesforce.findOffers(params)
	.then(offers => {
		console.log('Offers: ' + JSON.stringify(offers));
		response.send(JSON.stringify({
			'fulfillmentText' : 'Encontré una oferta en ' + city + ' que te puede interesar: ' + offers.Name
		}));
	})
	.catch((err)=>{
		console.error(err);
	});
}