//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/',{ useNewUrlParser: true },(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
        //we did this in order not to continue to the rest of function
    }
    console.log('connected to MongoDB server ');
    
    //delete many
    // db.db('TodoApp').collection('Todos').deleteMany({text:'Eat Pizza'}).then((result) => {
    //     console.log(result);
    // });
    
    //delete one
    // db.db('TodoApp').collection('Todos').deleteOne({text:'Eat Pizza'}).then((result)=>{
    //     console.log(result);
    // });

    //find one and delete
    // db.db('TodoApp').collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });
   // db.close();

//    db.db('TodoApp').collection('Users').deleteMany({name:'Yasser'}).then((result)=>{
//        console.log(result);
//    });

   db.db('TodoApp').collection('Users').findOneAndDelete({_id:390}).then((result)=>{
    console.log(result);
});
});