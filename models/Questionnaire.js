var mongoose = require('mongoose');

const Questionnaire = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    name: String,
    questions: [{
        question: String,
        wrongAnswers: Array,
        correctAnswers: Array
    }]
}, {
    timestamps: true
});

module.exports = Questionnaire;