
/**
 * Module dependencies.
 */

var express = require('express')
var app = express();

var selections = require('./selections-api');

app.use(selections);

app.listen(3000);
console.log('listening on port 3000');
