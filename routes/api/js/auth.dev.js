"use strict";

var express = require("express");

var router = express.Router(); // @route       GET api/auth
// @desc        Auth Route
// @access      Public

router.get("/", function (req, res) {
  return res.send("Auth Route");
});
module.exports = router;