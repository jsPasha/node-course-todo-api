const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');

	const db = client.db('TodoApp')

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5ad7531adf2097125c527adf')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result)
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5ad739aea24afe128cff702e')
	}, {
		$set: {
			name: 'Pavlo'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result)
	});

	// client.close();
});