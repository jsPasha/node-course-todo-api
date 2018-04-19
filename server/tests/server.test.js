const expect = require('expect');
const request = require('supertest');
const { ObjectID } = require('mongodb');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');
const { todos, users, populateTodos, populateUsers } = require('./seed/seed');

// populateUsers();

// beforeEach(populateTodos);

// describe('POST /todos', function () {
// 	this.timeout(10000);
// 	it('should create a new todo', (done) => {
// 		var text = 'Test todo text';

// 		request(app)
// 			.post('/todos')
// 			.send({ text })
// 			.expect(200)
// 			.expect((res) => {
// 				expect(res.body.text).toBe(text);
// 			})
// 			.end((err, res) => {
// 				if (err) {
// 					return done(err);
// 				}
// 				Todo.find({ text }).then((todos) => {
// 					console.log(todos.length)
// 					expect(todos.length).toBeGreaterThan(0);
// 					expect(todos[0].text).toBe(text);
// 					done()
// 				}).catch((e) => done(e));
// 			});
// 	});

// 	it('shold not create todo with invalid body data', (done) => {
// 		var text = 'Test todo text';

// 		request(app)
// 			.post('/todos')
// 			.send({})
// 			.expect(400)
// 			.end((err, res) => {
// 				if (err) {
// 					return done(err);
// 				}
// 				Todo.find().then((todos) => {
// 					expect(todos.length).toBe(2);
// 					done();
// 				}).catch((e) => done(e));
// 			});
// 	});
// });

// describe('GET /todos', () => {
// 	it('shold get all todos', (done) => {
// 		request(app)
// 			.get('/todos')
// 			.expect(200)
// 			.expect((res) => {
// 				expect(res.body.todos.length).toBe(2);
// 			})
// 			.end(done)
// 	});
// });

// describe('GET /todos/:id', () => {
// 	it('shold return todo doc', (done) => {
// 		request(app)
// 			.get(`/todos/${todos[0]._id.toHexString()}`)
// 			.expect(200)
// 			.expect((res) => {
// 				expect(res.body.todo.text).toBe(todos[0].text);
// 			})
// 			.end(done)
// 	});

// 	it('shold return 404 if todo not found', (done) => {
// 		var id = new ObjectID;
// 		request(app)
// 			.get(`/todos/${id.toHexString()}`)
// 			.expect(404)
// 			.end(done)
// 	});

// 	it('shold return 404 for non-object ids', (done) => {
// 		request(app)
// 			.get('/todos/132')
// 			.expect(404)
// 			.end(done)
// 	});

// });

// describe('DELETE /todos/:id', () => {
// 	it('shold remove a todo', (done) => {
// 		var hexId = todos[1]._id.toHexString()
// 		request(app)
// 			.delete(`/todos/${hexId}`)
// 			.expect(200)
// 			.expect((res) => {
// 				expect(res.body.todo._id).toBe(hexId);
// 			})
// 			.end((err, res) => {
// 				if (err) {
// 					return done(err);
// 				}
// 				Todo.findById(hexId).then((todo) => {
// 					expect(todo).toBeFalsy();
// 					done();
// 				}).catch((e) => done(e));
// 			});
// 	});

// 	it('shold return 404 if todo not found', (done) => {
// 		var id = new ObjectID;
// 		request(app)
// 			.delete(`/todos/${id.toHexString()}`)
// 			.expect(404)
// 			.end(done)
// 	});

// 	it('shold return 404 for non-object ids', (done) => {
// 		request(app)
// 			.delete('/todos/132')
// 			.expect(404)
// 			.end(done)
// 	});

// });

// describe('PATCH /todos/:id', () => {
// 	it('shold update the todo', (done) => {

// 		var hexId = todos[0]._id.toHexString();
// 		var text = "was tested";

// 		request(app)
// 			.patch(`/todos/${hexId}`)
// 			.send({
// 				text,
// 				completed: true
// 			})
// 			.expect(200)
// 			.expect((res) => {
// 				expect(res.body.todo.text).toBe(text);
// 				expect(res.body.todo.completed).toBe(true);
// 				expect(typeof res.body.todo.completedAt).toBe('number');
// 			})
// 			.end(done);
// 	});

// 	it('shold clear completedAt when todo is not completed', (done) => {
// 		var hexId = todos[1]._id.toHexString();
// 		var text = "was tested";

// 		request(app)
// 			.patch(`/todos/${hexId}`)
// 			.send({
// 				text,
// 				completed: false
// 			})
// 			.expect(200)
// 			.expect((res) => {
// 				expect(res.body.todo.text).toBe(text);
// 				expect(res.body.todo.completed).toBeFalsy();
// 				expect(res.body.todo.completedAt).toBe(null);
// 			})
// 			.end(done);
// 	});

// });

// describe('GET /users/me', function() {
// 	this.timeout(10000);
// 	populateUsers();
// 	it('should return user if auth', (done) => {
// 		console.log(users[0].tokens[0].token);
// 		request(app)
// 			.get('/users/me')
// 			.set('x-auth', users[0].tokens[0].token)
// 			.expect(200)
// 			.expect((res) => {
// 				console.log(res)
// 				expect(res.body._id).toBe(users[0]._id.toHexString());
// 				expect(res.body.email).toBe(users[0].email);
// 			})
// 			.end(done)
// 	});

	// it('should return 401', (done) => {

	// })
// });