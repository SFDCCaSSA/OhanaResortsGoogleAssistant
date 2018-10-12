"use strict";

let express = require('express'),
    bodyParser = require('body-parser'),
    handlers = require('./handler'),
    app = express();

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());

app.post('/liveaqua', (req, res) => {
    console.log(req.body);


});

app.listen(app.get('port'), function() {
    console.log("Live Aqua Google Assistant server listening on port " + app.get('port'));
});