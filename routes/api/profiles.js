const express = require("express");
const router = express.Router();

// @route       GET api/profiles
// @desc        Profile Route
// @access      Public
router.get("/", (req, res) => res.send("Profiles Route"));

module.exports = router;
