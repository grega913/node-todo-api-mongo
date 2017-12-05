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

    //deleteMany
    /*
    db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
        console.log(result)
    })
    */

    //deleteOne
    /*
    db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
        console.log(result)
    })
    */

    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID ('5a26f2d9cdedbdbdd47aa4b3')
    }, {
        $set: {
            completed: true
        }
    },{
        returnOriginal:false
    })
        .then((result) => {
        console.log(result)
    })


    // db.close()
})