/**
 * GET /
 * questionnaires page.
 */
exports.index = (req, res) => {
  res.render('home', {
      title: 'Home'
  });
};
