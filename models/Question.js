import mongoose from "mongoose";

const Question = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    question: String,
    wrongAnswers: Array,
    correctAnswers: Array
});

module.exports = Question;