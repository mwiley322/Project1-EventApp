var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/techspace_test");
module.exports.Event = require('./event.js');
module.exports.Keyword = require('./keyword.js');
