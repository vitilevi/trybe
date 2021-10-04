const express = require('express');
const router = express.Router();

const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
];

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  const getPostIndex = posts.findIndex((el) => Number(el.id) === Number(id));

  if(getPostIndex === -1) next({ statusCode: 404, message: "post not found" });
  res.status(200).json(posts[getPostIndex])
});

router.get('/', (req, res) => {
  res.status(200).json({ posts })
});

module.exports = router;