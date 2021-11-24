const { Book } = require('../models');

const getAll = async (req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json({ books });
  } catch {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    return res.status(200).json(book);
  } catch {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = {
  getAll,
  getById,
}