const Questionnaire = require("../models/Questionnaire");

exports.index = (req, res) => {
    res.render('questionnaires/questionnaires', {
        title: 'questionnaires'
    });
};

exports.getCreate = (req, res) => {
    res.render('questionnaires/questionnairesCreate', {
        title: 'Create a new Questionnaire'
    })
}

exports.postCreate = (req, res) => {
    const questionnaire = new Questionnaire({
        name: req.body.name,
        questions: [{
            question: req.body.question,
            wrongAnswers: [req.body.answer1],
            correctAnswers: [req.body.answer2, req.body.answer3, req.body.answer4]
        }]
    });

    questionnaire.save((err) => {
        console.log(err);
        if (err) {
            if (err.code === 11000) {
                req.flash('errors', {
                    msg: 'Coudnt save questionniere'
                });
                return res.redirect('/questionnaires/create');
            }
            return res.redirect('/questionnaires/create');
        }

        req.flash('success', {
            msg: 'Success! You created a new Questionnaire'
        });
        res.redirect('/questionnaires/create');
    });
}