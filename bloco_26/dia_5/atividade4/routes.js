const express = require('express');
const router = express.Router();
const validateFields = require('./validateFields');
const { writeFile, readFile } = require('./writeFile');

router.use(validateFields);

router.post('/teams', (req, res) => {
  const { name, initials, country, league } = req.body;
  const obj = {
    name,
    initials,
    country,
    league,
  }
  writeFile(obj);
  res.status(200).json(obj);
});

router.get('/teams', async (req, res) => {
  const getFile = await readFile();
  if(getFile.length === 0) {
    return res.status(200).json({ teams: [] })
  }
  res.status(200).json({ teams: getFile })
})

module.exports = router;