// db.js
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '1234',
  // database: process.env.DB_NAME || 'beurre_mou_christmascake',
  database: process.env.DB_NAME || 'bmchristmascake',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;


//CREATE SCHEMA `beurre_mou_christmascake` DEFAULT CHARACTER SET utf8 ;


