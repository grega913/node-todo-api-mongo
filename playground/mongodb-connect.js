//const MongoClient = require('mongodb').MongoClient
//const {MongoClient} = require('mongodb') //identical as the one above - object destructuring

const {MongoClient, ObjectID} = require('mongodb')

/*var obj = new ObjectID()
console.log(obj)
*/

var user = {name:'Grega', age:'78'}
//object destructuring - ES6 way to create new variables from object's properties
var {name}=user
console.log(name)

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server!')
    } 
    console.log('Connected to MongoDB server')

    /*
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    },(err,result)=> {
        if(err) {
            return console.log('Unable to insert todo', err)
        } 
        console.log(JSON.stringify(result.ops, undefined ,2))
    })
    

    db.collection('Users').insertOne({
        name: 'Sandi',
        age: '45',
        location:'Ljubljana'
    },(err,result)=> {
        if(err) {
            return console.log('Unable to insert todo', err)
        } 
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined ,2))
    })
    */



    db.close()
})