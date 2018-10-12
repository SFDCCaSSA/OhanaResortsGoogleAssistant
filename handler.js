"use strict";

let salesforce = require("/.salesforce");

exports.queryDeals = (params, session, response) => {
	console.log('Entered queryDeals');
	salesforce.findOffers({city: params.conversation-city.value})
	.then(offers => {
		console.log('Offers: %j' + offers);
	})
	.catch((err)=>{
		console.error(err);
	});
}