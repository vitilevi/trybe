const { default: axios } = require('axios');

const getCategories = async () => {
  const categories = await axios.get('https://api.chucknorris.io/jokes/categories');
  return categories.data;
};

module.exports = {
  getCategories,
};
