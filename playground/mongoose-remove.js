const {ObjectID} = require('mongodb');  
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((result) =>{
//     console.log(result);
// });

// Todo.findByIdAndDelete('5d37588251f829d1cfd6bc7d').then((todo)=>{
//     console.log(todo);
// });

Todo.findOneAndDelete({text:'test3'}).then((todo) =>{
    console.log(todo);
});