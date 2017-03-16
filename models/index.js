var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/techspace");

module.exports.Event = require('./event.js');
