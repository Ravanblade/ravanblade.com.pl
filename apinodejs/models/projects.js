'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    CategoryID: Number,
    Title: String,
    Technologies: String,
    Text: String,
    Url: String,
    UrlText: String,
    CodeUrl: String,
    CodeText: String,
    ImgUrl: String
});

module.exports = mongoose.model('Projects', ProjectSchema);
