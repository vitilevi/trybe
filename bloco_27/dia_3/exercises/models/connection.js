const mysql = require('mysql2/promise');
const { HOST, USER, PASSWORD, DATABASE } = process.env;

const connection = mysql.createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE});

module.exports = connection;