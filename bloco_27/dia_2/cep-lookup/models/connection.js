const { createPool } = require('mysql2/promise');

module.exports = createPool({
  host: 'localhost',
  user: 'vitilevi',
  password: '123456ae',
  database: 'cep_lookup',
});