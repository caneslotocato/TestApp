var mongodb = require('mongodb');
var mongoClient = require('mongodb').MongoClient;
var webSocket = require('ws');

var url = "mongodb://Rovida:Radiosveglia98@ds129904.mlab.com:29904/heroku_g19zf08x";
var ws = new webSocket('ws://Rovida:Radiosveglia98@ds129904.mlab.com:29904/heroku_g19zf08x');


ws.on('message', function incoming(data){
    console.log(data);
});

