const express = require('express');
// const MongoClient = require('mongodb').MongoClient; // used to connect to Mongo Database
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // used to parse json.requests
const dbConfig = require('../config/db') //Used for mLab Configuration 
const app = express(); 
const cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
})

var db = mongoose.connection; 

db.on("error", function() { 
    console.log("error");
})

db.once("open", function() {
    require('./routes')(app, db)
})


//     //After successfully connecting connect to the correct DB name in this case node-grade table
//     var db = database.db("node-grade-table");
    


var port = process.env.port || 5000; 

app.listen(port, function() {
    console.log('listening on port: ', port)
    });
// });



