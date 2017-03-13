var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/techspace_test");

var Album = require('./event');

module.exports.Event = require('./event.js');
module.exports.KeyWord = require('./keyword.js');
