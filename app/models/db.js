const mysql = require("mysql2");
const dbConfig = require("../config/db.config");
// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'nodemysqlrestapi'
});
// open the MySQL connection
connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Successfully connected MySQL!");
});
module.exports = connection;