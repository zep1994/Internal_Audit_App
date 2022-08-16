const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient


const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://tmatlock94:BSY500a!@cluster0.dsrreof.mongodb.net/?retryWrites=true&w=majority'
        )
        .then(client => {
            console.log("Connected")
            callback(client)
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = mongoConnect

//RebelandDanarethebestdogs1994