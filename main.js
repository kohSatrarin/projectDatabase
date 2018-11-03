//test pull info from mysql name = 'bank'
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  //need function generate id for custumer

  //test add new customer
  var addNewCustomer =
    "INSERT INTO `customer` (`id`, `fname`, `lname`, `dob`, `gender`, `phone`, `home_addr`, `work_addr`, `account_id`) VALUES ('', 'Mr.A', 'B', '2018-11-01', 'M', '01234567890', 'cmu chiangMai', 'cmu chiangMai', 'acountMrA');";
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
