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
		let offerName = offers.name;
		console.log(offerName);
		response.send(JSON.stringify({
			'fulfillmentText' : 'Encontré una oferta en ' + city + ' que te puede interesar: ' + offerName
		}));
	})
	.catch((err)=>{
		console.error(err);
	});
}