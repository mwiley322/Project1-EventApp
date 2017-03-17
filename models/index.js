var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/techspace");
mongoose.connect( process.env.mongolab-shallow-70817 || 'mongodb://localhost/techspace')
module.exports.Event = require('./event.js');
