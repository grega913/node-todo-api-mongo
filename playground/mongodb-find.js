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

    //db.collection('Todos').find().toArray().then((docs) => {      --------- all documents from connection
   /*
    db.collection('Todos').find({
        _id: new ObjectID('5a26ce60360907b172bb425b')
    }).toArray().then((docs) => { //---------- only those with comleted=false
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch todos', err)
    })
    */

    ///////////////count/////////////////
    db.collection('Todos').find().count().then((count) => { //---------- only those with comleted=false
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch counts', err)
    })

    db.collection('Users').find({name:'Sandi'}).toArray().then((docs) => { //---------- only those with comleted=false
        console.log('Users - those documents with name:Sandi');
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch todos', err)
    })
    db.close()
})