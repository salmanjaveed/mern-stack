"use strict";

var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true
  },
  email: {
    type: string,
    required: true,
    unique: true
  },
  password: {
    type: string,
    required: true
  },
  avatar: {
    type: string
  },
  date: {
    type: Date,
    "default": date.now()
  }
});
module.exports = User = mongoose.model("user", UserSchema);