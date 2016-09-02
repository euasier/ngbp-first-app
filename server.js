var express  = require('express');
var mongodb = require('mongodb');
var app      = express();
var bodyParser = require('body-parser');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/ngbp-first-app';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'));                 

function getAllDocs(dbclient, dburl, collec, req, res) {
	dbclient.connect(dburl, function (err, db) {
	  if (err) {
	    console.log('Unable to connect to the mongoDB server. Error:', err);
	  } else {
	    console.log('Connection established to', url);

	    var collection = db.collection(collec);

	    collection.find().toArray(function (err, result) {
	      if (err) {
					console.log(err);
	      } else if (result.length) {
					console.log('Found:', result);
	      } else {
					result = 'No document(s) found with defined "find" criteria!';
					console.log(result);
	      }
	      res.json(result);

	      db.close();
	    });
	  }
	});
};

function insertDoc(dbclient, dburl, collec, req, res) {
	var query = {};

	dbclient.connect(dburl, function (err, db) {
  if (err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	} else {
		console.log('Connection established to', url);
		
		var collection = db.collection(collec);
		collection.insert(req.body, function(err, result) {
					if (err) {
							console.log(err);
					} else {
						console.log(result);
					}

					collection.find().toArray(function (err, result) {
						if (err) {
							console.log(err);
						} else if (result.length) {
							console.log('Found:', result);
						} else {
							result = 'No document(s) found with defined "find" criteria!';
							console.log(result);
						}

					res.send(result);
					db.close();
					})
     });
	}
	});
};

function updateDocByField(dbclient, dburl, collec, field, value, req, res) {
	var query = {};

	dbclient.connect(dburl, function (err, db) {
  if (err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	} else {
		console.log('Connection established to', url);
		
		var collection = db.collection(collec);
		var selectQuery = JSON.parse('{"'+field+'":'+value+'}');
		collection.update(selectQuery, req.body, function(err, result) {
					if (err) {
							console.log(err);
					} else {
						console.log(result);
					}

					collection.find().toArray(function (err, result) {
						if (err) {
							console.log(err);
						} else if (result.length) {
							console.log('Found:', result);
						} else {
							result = 'No document(s) found with defined "find" criteria!';
							console.log(result);
						}

					res.send(result);
					db.close();
					})
     });
	}
	});
};

function removeDocByField(dbclient, dburl, collec, field, value, req, res) {
	var query = {};

	dbclient.connect(dburl, function (err, db) {
  if (err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	} else {
		console.log('Connection established to', url);

		var collection = db.collection(collec);
		query = JSON.parse('{"'+field+'":'+value+'}');
		collection.remove(query, function(err, result) {
					if (err) {
							console.log(err);
					} else {
						console.log(result);
					}

					collection.find().toArray(function (err, result) {
						if (err) {
							console.log(err);
						} else if (result.length) {
							console.log('Found:', result);
						} else {
							result = 'No document(s) found with defined "find" criteria!';
							console.log(result);
						}

					res.send(result);
					db.close();
					})
     });
	}
	});
};


app.get('/getAllDiagnoses', function (req, res, next) {
	getAllDocs(MongoClient, url, 'diagnoses', req, res)
});

app.get('/getAllProcedures', function (req, res, next) {
	getAllDocs(MongoClient, url, 'procedures', req, res)
});

app.get('/getAllPatients', function (req, res, next) {
	getAllDocs(MongoClient, url, 'patients', req, res)
});

app.post('/insertPatient', function (req, res, next) {
	insertDoc(MongoClient, url, 'patients', req, res);
});

app.post('/updatePatientById', function (req, res, next) {
	console.log("Updating doc id" + req.body.id);
	updateDocByField(MongoClient, url, 'patients', 'id', req.body.id, req, res);
});

app.get('/removePatientById/:id', function (req, res, next) {
	removeDocByField(MongoClient, url, 'patients', 'id', req.params.id, req, res)
});

app.listen(8000);
console.log("App listening on port 8000");
