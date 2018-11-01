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
  console.log("Connected!");
  //test add new customer
  var addNewCostomer =
    "INSERT INTO `customer` (`id`, `fname`, `lname`, `dob`, `gender`, `phone`, `home_addr`, `work_addr`, `account_id`) VALUES ('', 'ccccc', 'dddddd', '2018-10-11', 'F', '02000000001', 'home', 'work', '000000002');";
  con.query(addNewCostomer, function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  //text pull all customer
  con.query("SELECT * FROM `customer` WHERE 1", function(err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
