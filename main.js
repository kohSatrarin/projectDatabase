//test pull info from mysql name = 'bank'
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bank"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM `customer` WHERE 1", function(err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
