"use strict";

module.exports = (req, res) => {
	let session = req.body.session,
		intent, 
		params;

	if(req.body.queryResult){
		params = req.body.queryResult.parameters;
		if(req.body.queryResult.intent){
			intent = req.body.queryResult.intent.displayName;
		}
	}
	
	return {
		session: session,
		intent: intent,
		params: params
	};

};