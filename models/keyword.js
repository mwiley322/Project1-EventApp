var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var KeywordSchema = new Schema({
    name: String

});

var Keyword = mongoose.model('Keyword', KeywordSchema);

module.exports = Keyword;
