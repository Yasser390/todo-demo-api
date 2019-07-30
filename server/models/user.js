const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const fs = require('fs');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate :{
            validator : (value) => { //or we simply can do "validator: validator.isEmail"
                return validator.isEmail(value);
            },
            message : '{VALUE} is not a valid email'
        }
    },
    password:{
        type : String,
        required :true,
        minlength: 6
    },
    tokens: [{
        access :{
            type: String,
            required: true
        },
        token :{
            type :String,
            required:true
        }
    }]
});

UserSchema.methods.toJSON = function (){
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject,['_id','email']);
};

UserSchema.methods.generateAuthToken = function (){
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();

    user.tokens.push({access,token});
    
    return user.save().then(() =>{
        return token;
    });
};

UserSchema.methods.removeToken = function (token){
    var user = this;
    return user.update({
        $pull:{
            tokens:{ token}
        }
    });
     
};

UserSchema.statics.findByToken = function(token){ //3amla zy el static method fel java
    var User = this;
    var decoded;
    
    try{
        decoded = jwt.verify(token,'abc123');
    }catch(e){
        // return new Promise((resole,reject)=>{
        //     reject
        // });
        return Promise.reject(); // zy elly foa2
    }
    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

UserSchema.statics.findByCredentials = function (email,password){
    var User = this;

    return User.findOne({email}).then((user)=>{
        if(!user) {return Promise.reject();}

        return new Promise((resolve,reject)=>{
            bcrypt.compare(password,user.password,(err,res)=>{
                if(res){
                    resolve(user);
                }
                else reject();
            }); 
        });
    });
};

UserSchema.pre('save',function (next){
    var user = this;
    if(user.isModified('password')){
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(user.password,salt,(err,hash)=>{
                //console.log(hash);
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

var User = mongoose.model('User',UserSchema);

module.exports = {User};

// var newUser = new User({name:'Yasser', email:'zasser390@gmail.com'});

// newUser.save().then((doc) =>{
//     console.log('New user added:\n______________\n',JSON.stringify(doc,undefined,2));  
// },(e) =>{
//     console.log('Unable to add new user',e);
// });
