const express = require('express');
const validateInfos = require('../middlewares/validateInfos');
const { insertOneUser } = require('../model/user');

const router = express.Router();

router.post('/', validateInfos, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const insertNewUser = await insertOneUser(firstName, lastName, email, password);
  console.log(insertNewUser);
  res.status(201).json(insertNewUser);
});

module.exports = router;