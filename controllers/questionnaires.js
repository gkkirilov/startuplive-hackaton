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
        name: req.params.name
    });

    questionnaire.save((err) => {
        if (err) {
            if (err.code === 11000) {
                req.flash('errors', {
                    msg: 'Coudnt save questionniere'
                });
                return res.redirect('/');
            }
            return res.redirect('/');
        }
        req.flash('success', {
            msg: 'Success! You created a new Questionnaire'
        });
        res.redirect('/');
    });
}