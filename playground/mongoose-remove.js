const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require ('./../server/models/todo')

//Todo.remove
/*
Todo.remove({}).then((result)=> {
    console.log(result)
})

Todo.findOneAndRemove({}).then((doc)=>{

})
*/


Todo.findByIdAndRemove('5a290340bd6272dbd14a737c').then((todo)=> {
    console.log(todo)
})