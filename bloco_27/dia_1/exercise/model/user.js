const connection = require('./connection');
const { ObjectId } = require('mongodb');

const insertOneUser = async (firstName, lastName, email, password) => {
  return await connection()
    .then((db) => db.collection('users').insertOne({
      firstName,
      lastName,
      email,
      password,
    }))
    .then(({ insertedId }) => {
      return {
        id: ObjectId(insertedId),
        firstName,
        lastName,
        email,
        password,
      }
    });
};

module.exports = {
  insertOneUser,
}