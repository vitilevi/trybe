const jokeModel = require('../models/joke');

const listJokes = async (_req, res) => {
  const joke = await jokeModel.getJokes();
  return res.render('jokeView', { joke });
};

module.exports = {
  listJokes,
};