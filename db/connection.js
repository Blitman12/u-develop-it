const mysql = require('mysql2')

// Connect to MySQL Database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'election'
},
    console.log('Connected to the election database')
);

module.exports = db;