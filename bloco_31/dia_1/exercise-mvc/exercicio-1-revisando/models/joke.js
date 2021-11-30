const { default: Axios } = require("axios");

const getJokes = async () => {
  const fetched = await Axios.get('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single');
  return fetched.data.joke;
};

module.exports = {
  getJokes,
};