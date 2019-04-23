var mysql = require('mysql');
const path = require("path");
const express = require("express");
const app = express();
const PORT = 6060;
let name = null;
let phoneNumber = null;
let email = null;
let uniqueId = null;

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: process.env.WEBSITE_USER,

  // Your password
  password: process.env.WEBSITE_PASSWORD,
  database: "hot_restaurant"
});

//handles different paths and serves the specific related files
app.use(express.static(path.join(__dirname, "../")))

// changing + tp , goes up one directory
app.get("/", function (req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "../tables.html"))
})

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "../reserve.html"))
})

//starts the server and listens for responses
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

function showTables() {
  connection.query("SELECT * FROM corn_scribble", function (err, res) {
    if (err) throw err;
    console.log(res);
  });

  for (i = 0; i < res.length; i++) {
    data.push([res[i].name, res[i].phone_numberumber, res[i].email, '$' + res[i].price, res[i].stock_quantity]);
  }

}

function addReservation() {
  name = document.getElementById('name').value;
  phoneNumber = document.getElementById('phoneNumber').value;
  email = document.getElementById('email').value;
  uniqueId = document.getElementById('uniqueId').value;

  connection.query('INSERT INTO corn_scribble (name, phone_number, email) VALUES (' + uniqueId + ', ' + name + ', ' + phoneNumber + ', ' + email + ')', function (err, res) {
    if (err) throw err;
    console.log(res);
  });

  console.log(name);
  console.log(phoneNumber);
  console.log(email);
  console.log(uniqueId);
  showTables();
}