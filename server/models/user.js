var mongoose = require('mongoose');

var User = mongoose.model('User',{
    name:{
        type: String,
        required : true,
        minLengh: 1,
        trim: true
    },
    email:{
        type: String,
        required: true,
        minLengh: 1,
        trim: true
    }
});

module.exports = {User};

// var newUser = new User({name:'Yasser', email:'zasser390@gmail.com'});

// newUser.save().then((doc) =>{
//     console.log('New user added:\n______________\n',JSON.stringify(doc,undefined,2));  
// },(e) =>{
//     console.log('Unable to add new user',e);
// });
