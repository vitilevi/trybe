const { createPool } = require('mysql2/promise');
const { HOST, USER, PASSWORD, DATABASE } = process.env;
module.exports = createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
});