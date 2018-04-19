const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mangoos');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result)
// })

// Todo.findOneAndRemove()

// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id:'5ad85402df2097125c527b7b'}).then((todo) => {
// 	console.log(todo);
// })

// Todo.findByIdAndRemove('5ad85402df2097125c527b7b').then((todo) => {
// 	console.log(todo);
// })
