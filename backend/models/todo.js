const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: {
        type: String, 
        // required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Todo = mongoose.model('Todo', todoSchema)

