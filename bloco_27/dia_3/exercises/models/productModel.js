const connection = require('./connection');

const add = async (name, brand) => {
  try {
    const [result] = await connection.query(
      `INSERT INTO products (name, brand) VALUES (?, ?);`,
      [name, brand]
    );

    return [{ id: result.insertId, name, brand }];
  } catch {
    return null;
  }
};

const getAll = async () => {
  try {
    const [result] = await connection.query('SELECT * FROM products');
    return result;
  } catch {
    return null;
  }
};

const getById = async (id) => {
  try {
    const [result] = await connection.query('SELECT * FROM products WHERE id = ?', [id]);
    if (!result.length) return null;
    return result;
  } catch {
    return null;
  }
};

const update = async (id, name, brand) => {
  try {
    const [result] = await connection.query('UPDATE products SET name = ?, brand = ? WHERE id = ?', [name, brand, id]);
    return result.affectedRows ? [{id, name, brand}] : null;
  } catch {
    return null;
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    if (!product) return null;
    await connection.query('DELETE FROM products WHERE id = ?', [id]);
    return product;
  } catch {
    return null;
  }
};

module.exports = { add, getAll, getById, update, exclude };