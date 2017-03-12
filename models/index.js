var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/techspace_test");

module.exports.Event = require('./event.js');
