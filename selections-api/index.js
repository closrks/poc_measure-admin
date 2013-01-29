var express = require('express');
var app = module.exports = express();
var routes = require('./routes');

app.get('/selections', routes.index);
app.get('/selections/:id', routes.find);