//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/',{ useNewUrlParser: true },(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
        //we did this in order not to continue to the rest of function
    }
    console.log('connected to MongoDB server ');

    // db.db('TodoApp').collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID('5d30e582427bc25979350f3b')
    // },{
    //    $set:{
    //        completed: true
    //     } 
    //     },{
    //         returnOriginal :false
    //     }
    // ).then((result)=>{
    //     console.log(result);
    // });

    db.db('TodoApp').collection('Users').findOneAndUpdate({
        _id : new ObjectID('5d30bbcb37dfee27f4259b80')
    },{
       $set:{
           name: 'Yasser'
        },
        $inc:{
            age: 6
        } 
    },{
        returnOriginal :false
        }
    ).then((result)=>{
        console.log(result);
    });
   
   // db.close();

});