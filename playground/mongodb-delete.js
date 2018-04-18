const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');

	const db = client.db('TodoApp')

	//deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lanch'}).then((result) => {
	// 	console.log(result)
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
	// 	console.log(result)
	// });

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
	// 	console.log(result)
	// });

	//deleteMany
	// db.collection('Users').deleteMany({name: 'Pavlo'}).then((result) => {
	// 	console.log(result);
	// });

	//deleteOne
	db.collection('Users').findOneAndDelete({ 
		_id: new ObjectID('5ad73abdfb7ff1039cb768bf') 
	}).then((result) => {
		console.log(result)
	});

	// client.close();
});