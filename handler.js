"use strict";

let salesforce = require("./salesforce");
let escape = require("html-escape");
let adults;
let children;
let checkIn;
let checkOut;
let paxName;
let property;

exports.queryDeals = (params, session, response) => {
	console.log('Entered queryDeals');
	console.log('Params: ' + JSON.stringify(params));
	let city = params['conversation-city'];
	adults = params['adults'];
	children = params['children'];
	checkIn = params['checkIn'];
	checkOut = params['checkOut'];
	paxName = params['paxName'];
	console.log('City: '  + city);
	salesforce.findOffers(params)
	.then(offers => {
		console.log('Offers: ' + JSON.stringify(offers));
		let offer = offers[0];
		console.log(JSON.stringify(offer));
		let offerName = offer.get('name');
		let desc = escape(offer.get('description_plain__c'));
		property = offer.get('Property__c');
		console.log(offerName);
		response.say('Encontré una oferta en ' + city + ' que te puede interesar: ' + offerName  + desc + '. ¿Te gustaría reservar?');
		/*response.send(JSON.stringify({
			'fulfillmentText' : 'Encontré una oferta en ' + city + ' que te puede interesar: ' + offerName + '. ' + desc + '. ¿Te gustaría reservar?'
		}));*/
	})
	.catch((err)=>{
		console.error(err);
	});
}

exports.comfirmReservation = (params, session, response) => {
	console.log('Entered comfirmReservation');
	console.log('Adults: ' + adults);
	salesforce.makeReservation(property, adults, children, checkIn, checkOut, paxName)
	.then(rez => {
		console.log('Reservación generada exitosamente');
		response.say('Reservación confirmada para ' + adults + ' adultos y ' + children + ' niños a nombre de ' + paxName + ' llegando el ' + checkIn + ' y saliendo el ' + checkOut + '. ' );
	})
	.catch((err)=>{
		console.error(err);
		response.say('Ocurrió un error al completar tu reserva. Por favor intenta nuevamente.');
	});
	
}