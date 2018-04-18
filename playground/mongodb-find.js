const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');

	const db = client.db('TodoApp')

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5ad745b7df2097125c527aae')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2))
	// }).catch((err) => {
	// 	console.log('Unable to fetch todos', err)
	// });

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5ad745b7df2097125c527aae')
	// }).count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }).catch((err) => {
	// 	console.log('Unable to fetch todos', err)
	// });

	db.collection('Users').find({
		name: 'Pavlo'
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2))
	}).catch((err) => {
		console.log('Unable to fetch todos', err)
	});

	// client.close();
});