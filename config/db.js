const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Senseops',
  password: 'omkar@2003',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
