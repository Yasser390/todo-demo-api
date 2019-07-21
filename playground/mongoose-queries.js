const {ObjectID} = require('mongodb');  
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '5d339677b075381034ea8e9f11';
var userID = '5d31da8c6d2f403170543944';

User.findById(userID).then((user)=>{
    if(!user) return console.log('No users found');
    console.log('User: ',user);
})
.catch((e)=>{console.log(e);});

// if(!ObjectID.isValid(id)){
//     console.log('id is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) =>{
//     if(todos.length===0){return console.log('Id did not match');}
//     console.log('Todos: ',todos);
// },(e)=>{
//     console.log('cannot find todos',e);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) =>{
//     if(!todo) {return console.log('Id not found');}
//     console.log('Todo: ',todo);
// },(e)=>{
//     console.log('cannot find todo',e);
// });

// Todo.findById(id).then((todo) =>{
//     if(!todo) {return console.log('Id not found');}
//     console.log('Todo by ID: ',todo);
// }).catch((e)=>{
//     console.log(e);
// });
