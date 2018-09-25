// set up the MySQL connection
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 8080,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}

connection.connect(function(error) {
    if (error) {
        console.log("error connection 19 connection.js " + error.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;