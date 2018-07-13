let Goal = require('../models/goal');

function getGoals(req, res){
    Goal.find( (err, goals) => {
        if(err){
            res.send(err)
        }
        res.send(goals);
    })
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

module.exports = {getGoals, postGoal};