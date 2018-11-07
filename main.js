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
    "INSERT INTO `customer` (`id`, `fname`,`lname`, `dob`, `gender`, `phone`, `home_addr`, `work_addr`, `account_id`) VALUES ('099', 'Mr.A', 'B', '2018-11-01', 'M', '01234567890', 'cmu chiangMai', 'cmu chiangMai', 'acountMrA');";
  con.query(addNewCustomer, function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  var createAccount =
    "INSERT INTO `account` (`id`, `balance`, `bond_id`, `customer_id`) VALUES ('100001', '10000', '200001', '000001');";
  con.query(createAccount, function(err, result) {
    if (err) throw err;
  });

  var createBond =
    "INSERT INTO `bond` (`id`, `amount`) VALUES ('200001', '0');";
  con.query(createBond, function(err, result) {
    if (err) throw err;
  });
}

function showAllUser() {
  con.query("SELECT * FROM `customer` WHERE 1", function(err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  con.query("SELECT * FROM `account` WHERE 1", function(err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
}

function addBond() {
  var addBond = "UPDATE `bond` SET amount = '500' WHERE id = 200001";
  con.query(addBond, function(err, result) {
    if (err) throw err;
  });

  var subtractMoney =
    "UPDATE `account` SET balance = '9500' WHERE bond_id = 200001";
  con.query(subtractMoney, function(err, result) {
    if (err) throw err;
  });
}

function showBond() {
  con.query("SELECT * FROM `bond` WHERE 1", function(err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
}

// function addNewCustomerTest() {
//   var addNewCustomer =
//     "INSERT INTO `customer` (`fname`,`lname`, `dob`, `gender`, `phone`, `home_addr`, `work_addr`, `account_id`) VALUES ('Mr.A', 'B', '2018-11-01', 'M', '01234567890', 'cmu chiangMai', 'cmu chiangMai', 'acountMrA');";

//   con.query("INSERT INTO `customer` SET ?", addNewCustomer, function(
//     err,
//     result
//   ) {
//     if (err) throw err;
//     console.log("Last record insert id:", result.insertId);
//   });
// }

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  //need function generate id for custumer

  //test add new customer
  //addNewCustomer();
  showBond();

  //text pull all customer
  showAllUser();
  addBond();
  showBond();

  // hello();
  // hello("CSS", "HTML", "AAA", 4);
});

//con.end(); //close connection to mysql
