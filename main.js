//test pull info from mysql name = 'bank'
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

// function hello(name) {
//   console.log("hello " + name);
// }

function addNewCustomer() {
  var addNewCustomer =
    "INSERT INTO `customer` (`id`, `fname`,`lname`, `dob`, `gender`, `phone`, `home_addr`, `work_addr`, `account_id`) VALUES ('04', 'Mr.A', 'B', '2018-11-01', 'M', '01234567890', 'cmu chiangMai', 'cmu chiangMai', 'acountMrA');";
  con.query(addNewCustomer, function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}

function showAllUser() {
  con.query("SELECT * FROM `customer` WHERE 1", function(err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
}

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  //need function generate id for custumer

  //test add new customer
  //addNewCustomer();

  //text pull all customer
  // showAllUser();

  // hello();
  // hello("CSS", "HTML", "AAA", 4);
});

con.end(); //close connection to mysql
