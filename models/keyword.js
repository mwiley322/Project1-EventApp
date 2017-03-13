var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var KeyWordSchema = new Schema({
    name: String

});

var KeyWord = mongoose.model('KeyWord', KeyWordSchema);

module.exports = KeyWord;
