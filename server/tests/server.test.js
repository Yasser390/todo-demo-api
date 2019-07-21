const expect = require('expect');
const request = require('supertest');

var {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    text:'First test todo'
},{
    text:'Second test todo'
}];

beforeEach((done)=>{ //empties the database before test
    Todo.deleteMany({}).then(()=>{ //used deleteMany instead of remove because remove is deprecated.
        done();
    });
});

describe('Post /todos',() =>{
    it('should create a new todo',(done)=>{
        var text = 'Test todo text';

        request(app)
        .post('/todos').send({text}).expect(200).expect((res)=>{
            expect(res.body.text).toBe(text);
        }).end((err,res)=>{
            if(err){
                return done(err);
            }
            Todo.find().then((todos)=>{
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e)=>done(e));
        });
    });

    it('should not create todo with invalid body data',(done)=>{
        var text = '';

        request(app)
        .post('/todos').send({text}).expect(400).end((err,res)=>{
            if(err){
                return done(err);
            }
            Todo.find().then((todos)=>{
                expect(todos.length).toBe(0);
                done();
            }).catch((e)=>done(e));
        });
    });
});