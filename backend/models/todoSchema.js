
const mongoose = require('mongoose');

const todoShema = new mongoose.Schema({
  todo: { type: String, required: true },
  
  
});

const Todo = mongoose.model('Todo', todoShema);

module.exports = Todo;