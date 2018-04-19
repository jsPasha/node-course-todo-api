const { ObjectID } = require('mongodb');
const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');
const jwt = require('jsonwebtoken');

const userOneId = new ObjectID;
const userTwoId = new ObjectID;

const users = [{
	_id: userOneId,
	email: 'test@exam.com',
	password: 'userOnePath',
	tokens: [{
		access: 'auth',
		token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
	}]
}, {
	_id: userTwoId,
	email: 'test2@exam.com',
	password: 'userTwoPath',
}]; 

const todos = [{
	_id: new ObjectID,
	text: 'First text todo'
}, {
	_id: new ObjectID,
	text: 'Second test todo',
	completed: true,
	completedAt: 123
}];

const populateTodos = (done) => {
	Todo.remove({}).then(() => {
		Todo.insertMany(todos);
	}).then(done);
};

const populateUsers = (done) => {
	User.remove({}).then(() => {
		var userOne = new User(users[0]).save();
		var userTwo = new User(users[1]).save();

		return Promise.all([userOne, userTwo]);
	}).then(done);
};

module.exports = { todos, users , populateTodos, populateUsers };