const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: "database_Host",
    user: "database_username",
    password: "database_password",
    database: "database_name",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
  
module.exports = pool;