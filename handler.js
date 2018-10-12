"use strict";

let salesforce = require("./salesforce");

exports.queryDeals = (params, session, response) => {
	console.log('Entered queryDeals');
	console.log('Params: ' + JSON.stringify(params));
	salesforce.findOffers({})
	.then(offers => {
		console.log('Offers: ' + JSON.stringify(offers));
	})
	.catch((err)=>{
		console.error(err);
	});
}