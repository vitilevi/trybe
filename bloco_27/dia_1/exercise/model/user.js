const connection = require('./connection');
const { ObjectId } = require('mongodb');

const insertOneUser = async (firstName, lastName, email, password) => {
  const db = await connection();
  const response = await db.collection('users').insertOne({
    firstName,
    lastName,
    email,
    password,
  });
  const { insertedId } = response;
  return [{
    id: ObjectId(insertedId),
    firstName,
    lastName,
    email,
    password,
  }];
};

const getAllUsers = async () => {
  const db = await connection();
  const response = db.collection('users').find().toArray();
  return response || [];
};

const updateUser = async (id, firstName, lastName, email, password) => {
  const db = await connection();
  const response = await db.collection('users').updateOne(
    { 
      '_id': ObjectId(id),
    },
    {
      $set: {
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'password': password,
      },
    },
  );
  if (!response.matchedCount) return null;
  return [{
    id,
    firstName,
    lastName,
    email,
    password,
  }];
}

module.exports = {
  insertOneUser,
  getAllUsers,
  updateUser,
}