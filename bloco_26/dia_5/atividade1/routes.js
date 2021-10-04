const express = require('express');
const router = express.Router();
const validateInfos = require('./validateInfos');
const getRandomToken = require('./generateRandomToken');

router.use(validateInfos);

router.post('/register', (req, res) => {
  res.status(200).json({ message: "user created" })
});

router.post('/login', (req, res) => {
  const randomToken = getRandomToken();
  res.status(200).json({ token: randomToken });
});

module.exports = router;