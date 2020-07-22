"use strict";

var express = require("express");

var app = express();

var connectDB = require("./config/db");

app.get("/", function (req, res) {
  return res.send("API Running...");
});
connectDB(); // initialize middleware to read Json Body

app.use(express.json({
  extended: false
}));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profiles", require("./routes/api/profiles"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log("Server Running on Port ".concat(PORT));
});