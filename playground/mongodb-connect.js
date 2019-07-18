//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/',{ useNewUrlParser: true },(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
        //we did this in order not to continue to the rest of function
    }
    console.log('connected to MongoDB server ');
    
    // db.db('TodoApp').collection('Todos').insertOne({
    //     text:'Go to dentist',
    //     completed : false
    // },(err,result)=>{
    //     if(err) { return console.log('Unable to insert todo',err); }
    //     console.log(JSON.stringify(result.ops, undefined,2));
    // });
    
    // db.db('TodoApp').collection('Users').insertOne({
       
    //     name: 'Yasser',
    //     age: 29,
    //     location: 'Cairo'
    // },(err, result) => {
    //     if(err) { return console.log('Unable to insert user',err); }
    //     //console.log(JSON.stringify(result.ops,undefined,4));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    db.close();
});