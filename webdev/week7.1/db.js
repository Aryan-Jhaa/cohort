const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// Defining schemas: 

const User = new Schema({
    email: {type: String, unique: true},
    password: String,
    name: String
})

const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})

// Definning the model (collection, schema)

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

// Exporting the models to be used in index.js

module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel
}