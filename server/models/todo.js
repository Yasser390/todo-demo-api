var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
    text:{
        type: String,
        required : true,
        minLengh: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});

module.exports = {Todo};

// var newTodo = new Todo({
//     text : 'Buy some clothes',
//     completed: false,
//     completedAt: 24
// });

// newTodo.save().then((doc) =>{
//     console.log('Saved todo',doc);  
// },(e) =>{
//     console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
//     text: true
// });

// otherTodo.save().then((doc) =>{
//     console.log('Saved todo',doc);  
// },(e) =>{
//     console.log('Unable to save todo',e);
// });

// var otherTodo = new Todo({
//     text: true
// });
