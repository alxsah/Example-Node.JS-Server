var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/home', function(req, res) {
	res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/*', function(req, res) {
	res.send('Sorry, the page you specified cannot be found.');
});

app.listen(8888, function() {
	console.log('Test server listening on port 8888!');
});