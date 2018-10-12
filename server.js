"use strict";

let express = require('express'),
    bodyParser = require('body-parser'),
    handlers = require('./handler'),
    googleAsst = require('./googleAssistant'),
    app = express();

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());

app.post('/liveaqua', (req, res) => {
    console.log(req.body);
    let ga = googleAsst(req,res),
        session = ga.session,
        intent = ga.intent,
        params = ga.params;
    console.log('Intent: ' + intent);
    console.log('Params: ' + params);
    console.log('Session: ' + session);
    
});

app.listen(app.get('port'), function() {
    console.log("Live Aqua Google Assistant server listening on port " + app.get('port'));
});