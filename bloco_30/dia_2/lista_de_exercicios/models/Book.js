const Book = (sequelize, DataTypes) => {
  const book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  },
  {
    updatedAt: false,
  });

  return book;
}

module.exports = Book;