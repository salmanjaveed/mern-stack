"use strict";

var express = require("express");

var router = express.Router(); // @route       GET api/profiles
// @desc        Profile Route
// @access      Public

router.get("/", function (req, res) {
  return res.send("Profiles Route");
});
module.exports = router;