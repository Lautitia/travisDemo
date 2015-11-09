var config = require('config');
var express = require('express');
var app = express();


app.use('/test', function (req, res, next) {
    res.send('GOGOGO');
});

app.listen(config.port);