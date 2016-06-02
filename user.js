var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
	console.log("Successfully connected to DB");
});

var userSchema = mongoose.Schema({
	name: String,
	password: String
});

var User = mongoose.model('User', userSchema);

var user1 = new User({name: 'alex', password: 'encryptedstuff'});

user1.save(function(err, user1) {
	if (err) return console.error(err);
	else {
		console.log("User " + user1.name + " saved to database.");
	}

});