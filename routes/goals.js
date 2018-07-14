let Goal = require('../models/goal');

function getGoals(req, res){
    Goal.find( (err, goals) => {
        if(err){
            res.send(err)
        }
        res.send(goals);
    })
}

function getGoal(req, res){

    Goal.findOne({_id: req.params._id}, (err, goal) => {
        if(err){
            res.send(err);
        }
        res.json(goal);
    });
}

function postGoal(req, res){
    let goal = new Goal();
    goal.name = req.body.name;
    goal.date = req.body.date;
    goal.id = req.body.id;
    goal.favorite = req.body.favorite;

    goal.save( (err) => {
        if(err){
            res.send('Cant add goal ', err);
        }
        res.json({message: `${goal.name} saved!`})
    })
}

function updateGoal(req, res){

    Goal.findByIdAndUpdate(req.body._id, {name: req.body.name}, {new: true}, (err, goal) => {
        if(err){
            res.send(err)
        }
        res.json({message: `${goal.name} updated`})
    })
}

function deleteGoal(req, res){

    Goal.findByIdAndDelete(req.body._id, (err, goal) => {
        if(err){
            res.send(err);
        }
        res.json({message: `${goal.name} deleted`});
    })
}

module.exports = {getGoals, getGoal, postGoal, updateGoal, deleteGoal};