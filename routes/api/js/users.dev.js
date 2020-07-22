"use strict";

var express = require("express");

var router = express.Router();

var _require = require("express-validator"),
    check = _require.check,
    validationResult = _require.validationResult; // @route       POST api/users
// @desc        Register User
// @access      Public


router.post("/", [check("name", "Invalid Name!").not().isEmpty(), check("email", "Invalid Email!").isEmail(), //password length to be min 6 chars
check("password", "Invalid Password!").isLength({
  min: 6
})], function (req, res) {
  var errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  res.send("User Route");
});
module.exports = router;