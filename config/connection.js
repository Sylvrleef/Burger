var mysql = require("mysql");
var connection;

// if (process.env.JAWSBD_URL) {
//   console.log("here");
//   connection = mysql.createConnection(process.env.JAWSBD_URL);
// } else {
//   connection = mysql.createConnection({
//     port: 3306,
//     host: "localhost",
//     user: "root",
//     password: "^yours001",
//     database: "burgers_db"
//   });

connection = mysql.createConnection({
    port: 3306,
    host: "	cig4l2op6r0fxymw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "fbngmuddgg5pan0h	",
    password: "v0j81aky2elgiu7s",
    database: "bhwvei1cy7p85ykx"
  });
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
// };

module.exports = connection;
