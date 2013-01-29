var mongo = require('mongodb');

var   Server = mongo.Server
    , Db = mongo.Db
    , BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('sampledb', server, {safe: true});

db.open(function(err, db) {
	if(!err) {
		console.log('Connected to sampledb database');
		db.collection('selections', {safe: true}, function(err, collection) {
			if(err) {
				console.log('the selections collection doesnt exist');
			}
		});
	}
});

exports.index = function(req, res, next) {
	db.collection('selections', function(err, collection) {
		collection.find().toArray(function(err, items) {
			res.send(items);
		});
	});
};

exports.find = function(req, res, next) {
	var id = req.params.id;
    console.log('Retrieving selections: ' + id);
	db.collection('selections', function(err, collection) {
		collection.find({_id: new BSON.ObjectID(id)}).toArray(function(err, items) {
			res.send(items);
		});
	});
};