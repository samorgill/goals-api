const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = Schema({
    name: String,
    date: Date,
    id: Number,
    favorite: Boolean
});

module.exports = mongoose.model('Goal', GoalSchema);