//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/',{ useNewUrlParser: true },(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
        //we did this in order not to continue to the rest of function
    }
    console.log('connected to MongoDB server ');
    
    // db.db('TodoApp').collection('Todos').find({
    //     _id : new ObjectID('5d30c999427bc25979350a85')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });

    // db.db('TodoApp').collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });

    db.db('TodoApp').collection('Users').find({name:'Yasser'}).
    toArray().then((docs) =>{
        console.log('Users:');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
         console.log('unable to fetch users',err);
    });


    db.db('TodoApp').collection('Users').find({name:'Yasser'}).
    count().then((count) =>{
        console.log(`Users count: ${count}`);
        
    },(err)=>{
         console.log('unable to fetch users',err);
    });

   // db.close();
});