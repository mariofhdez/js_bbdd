"use strict";

var client = require('mongodb').MongoClient;

client.connect('mongodb://localhost:27017/cursonode', function(err,db){
    if(err){
        console.log(err);
        return process.exit();
    }
    db.collection('agentes').find().toArray(function (err, docs){
        if(err){
            console.log(err);
            return process.exit();
        }
        console.log(docs);
        db.close();
    })
})