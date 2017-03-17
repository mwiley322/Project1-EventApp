var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/techspace");
// mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds133670.mlab.com:33670/heroku_s7tnnllg");
module.exports.Event = require('./event.js');
