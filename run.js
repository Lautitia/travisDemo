var config = require('config');
var express = require('express');
var app = express();

//pretend to fix a bug to test rebase

app.use('/test', function (req, res, next) {
    var i = 0;
    res.send('return data');
});

app.listen(config.port);