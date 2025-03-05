const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient


const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://thomasmatlockbba:OhEtx295sBmNxrppq@cluster0.0oi0b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(client => {
        console.log("Connected to the new MongoDB cluster");
        callback(client);
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });    
}

module.exports = mongoConnect

//RebelandDanarethebestdogs1994