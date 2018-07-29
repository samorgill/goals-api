const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let goal = require('./routes/goals');

mongoose.Promise = global.Promise;

const uri = 'mongodb://YourFreedom:GetYourFreedom18@ds247430.mlab.com:47430/goals_tutorial';

const options = {
    useNewUrlParser: true
};

mongoose.connect(uri, options)
    .then(() => {
    }, err => {
        console.log(err)
    });

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8010;

let prefix = '/api';

app.route(prefix + '/goals')
    .get(goal.getGoals);

app.route(prefix + '/goal')
    .post(goal.postGoal)
    .put(goal.updateGoal);

app.route(prefix + '/goal/:_id')
    .get(goal.getGoal)
    .delete(goal.deleteGoal);

app.listen(port, "0.0.0.0");
console.log('API live on port ', port);

module.exports = app;
