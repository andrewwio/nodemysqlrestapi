const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");
// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE
});
// open the MySQL connection
connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Successfully connected MySQL!");
});
module.exports = connection;