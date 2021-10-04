const express = require('express');
const router = express.Router();
const axios = require('axios');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || authorization.length !== 12) return res.status(401).json({ message: "invalid token" });
  next();
}

router.use(validateToken);

router.get('/price', async (req, res) => {
  try {
    const response = await axios('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    res.status(200).json(response.data);
  } catch(e) {
    res.status(500).json({ message: `Error: ${e}` })
  }
});

module.exports = router;