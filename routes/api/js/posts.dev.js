"use strict";

var express = require("express");

var router = express.Router(); // @route       GET api/posts
// @desc        Posts Route
// @access      Public

router.get("/", function (req, res) {
  return res.send("posts Route");
});
module.exports = router;