var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/home', function(req, res) {
	res.sendFile(path.join(__dirname + '/home.html'));
});

app.post('/api/login', function(req, res){
	console.log(req.body);
});

app.get('/*', function(req, res) {
	res.send('Sorry, the page you specified cannot be found.');
});

app.listen(8888, function() {
	console.log('Server listening on port 8888!');
});





