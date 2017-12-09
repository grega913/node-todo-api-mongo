const {SHA256} = require('crypto-js')

var message = 'I am user num 4'
var hash = SHA256(message).toString()

console.log(`Message: ${message}`)
console.log(`Hash: ${hash}`)

var data = {
    id:4
}

//in jwt world - jwt.sign

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

var resultHash = SHA256(JSON.stringify(token.data)+ 'somesecret').toString()

if (resultHash === token.hash) {
    console.log("Data was not changed")
} else {
    console.log('Data was changed! Don\'t trust anyone!')
}