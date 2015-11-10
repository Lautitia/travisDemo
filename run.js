var config = require('config');
var express = require('express');
var app = express();


app.use('/test', function (req, res, next) {
    var i = 0;
    res.send('GO With Joey');
});

app.listen(config.port);