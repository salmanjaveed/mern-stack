"use strict";

var express = require("express");

var app = express();
app.get("/", function (req, res) {
  return res.send("API Running...");
});
app.get("/api", function (req, res) {
  return res.send("API2 Running...");
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log("Server Running on Port ".concat(PORT));
});