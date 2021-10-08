const { MongoClient } = require('mongodb');

const URL = 'mongodb://127.0.0.1:27017';
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const connection = () => MongoClient.connect(URL, OPTIONS)
  .then((con) => con.db('Exercise26-1'))
  .catch((e) => {
    console.error(e);
    process.exit();
  });

module.exports = connection; 