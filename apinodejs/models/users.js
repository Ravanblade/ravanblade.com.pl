'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  Name: String,
  Surname: String,
  Login: String,
  Password: String
});

module.exports = mongoose.model("Users", usersSchema);
