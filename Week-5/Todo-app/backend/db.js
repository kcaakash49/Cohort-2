const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://kcaakash4910:A%40kash123@cluster0.kdchhm1.mongodb.net/todo-app')

const dbSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const Todo = mongoose.model("todos",dbSchema)

module.exports = {
    Todo
}