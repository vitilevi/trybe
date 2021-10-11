const { createPool } = require('mysql2/promise');

module.exports = createPool({
  host: 'localhost',
  user: 'vitilevi',
  password: 'vitilevi',
  database: 'cep_lookup',
});