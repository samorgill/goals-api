const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

const uri = 'mongodb://freedomers:freedom2018>@ds247430.mlab.com:47430/goals_tutorial';

mongoose.connect(uri)
    .then( () => {}, err => { console.log(err)});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8010;

const prefix = '/api';

