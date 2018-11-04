var mongoose = require('mongoose');

const questionnaireSchema = new mongoose.Schema({
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

const Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);

module.exports = Questionnaire;