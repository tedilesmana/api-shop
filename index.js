var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var config = require("./config/database");
var bodyParser = require("body-parser");
const app = express();

mongoose.connect(config.database);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Conected to Mongodb");
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

require("./router/router.js")(app);
// app.use("/", router);////////////////////

var port = 3300;

app.listen(port, function() {
    console.log("Server brjalan dengan port" + port);
});