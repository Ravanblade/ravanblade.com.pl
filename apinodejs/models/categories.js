'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriesSchema = new Schema({
  CategoryName: String
});

module.exports = mongoose.model("Categories", categoriesSchema);
