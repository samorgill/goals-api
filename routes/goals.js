let Goal = require('../models/goal');

function getGoals(req, res) {
    Goal.find((err, goals) => {
        if (err) {
            res.send(err)
        }
        res.send(goals);
    })
}

function getGoal(req, res){
    let goalId = req.params._id;

    Goal.findOne({_id: goalId}, (err, blog) =>{
        if(err){res.send(err)}
        res.json(blog);
    })
}

function postGoal(req, res) {
    let goal = new Goal();
    let gName = req.body.name;
    let gDate = req.body.date;
    let gId = req.body.id;
    let gFav = req.body.favorite;

    goal.name = gName;
    goal.date = gDate;
    goal.id = gId;
    goal.favorite = gFav;

    goal.save( (err) => {
        if(err){
            res.send(err);
        }
        console.log(`${goal.name}'s goal has been sent`);
        res.json({ message: `${goal.name}'s goal has been sent`})
    })
    }

//
function updateGoal(req, res) {

    console.log(req.body._id);
    Goal.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, goal) => {
        if (err) {
            res.send(err)
        }
        res.json({message: ` updated`})
    })
}

function deleteGoal(req, res) {

    Goal.findByIdAndRemove(req.params._id, (err, goal) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `${goal.name} deleted`});
    })
}

module.exports = {getGoals, getGoal, postGoal, updateGoal, deleteGoal};
