const express = require('express');
const { validatePassword, validateFields} = require('../middlewares/validateInfos');
const { insertOneUser, getAllUsers, updateUser } = require('../model/user');

const router = express.Router();

router.post('/', validateFields, validatePassword, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const insertNewUser = await insertOneUser(firstName, lastName, email, password);
  res.status(201).json(insertNewUser);
});

router.get('/', async (req, res) => {
  const users = await getAllUsers();
  res.status(200).json(users);
});

router.put('/:id', validateFields, validatePassword, async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const update = await updateUser(id, firstName, lastName, email, password);
  if (!update) {
    return res.status(404).json({
      "error": true,
      "message": "Usuário não encontrado"
  });
  }
  res.status(200).json(update);
});

module.exports = router;