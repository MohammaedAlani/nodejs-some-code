const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoos = require('mongoose');
const app = express();
const routerLocation = require('./api/route/location');
const routerUsers = require('./api/route/users');
const match = require('./api/route/match');
const operation = require('./api/operation/operations')



mongoos.connect('mongodb://mohammed:1212momo@cluster0-shard-00-00-nyfo3.mongodb.net:27017,cluster0-shard-00-01-nyfo3.mongodb.net:27017,cluster0-shard-00-02-nyfo3.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',{ useNewUrlParser: true })
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Origin, X-Requsted-With, Content-Type, Accept, Authorization');

if (req.method === 'OPTIONS') {
    res.header('Acess-Control-Allow-Methods' , 'PUT,POST,PATCH,DELETE,GET');
    return res.status(200).json({});
};
next();
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/location' , routerLocation);
app.use('/user', routerUsers);

//start when app run
// operation.operation();
// match.matches();





mongoos.Promise = global.Promise;
module.exports = app;