const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');

	const db = client.db('TodoApp')

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo');
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Pavlo',
	// 	age: 25,
	// 	location: 'Trebukhiv'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert user');
	// 	}
	// 	console.log(result.ops[0]._id.getTimestamp());
	// });

	client.close();
});