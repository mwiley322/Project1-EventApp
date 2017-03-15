var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Keyword = require('./keyword');

var EventSchema = new Schema ({
  eventName: String, //req
  description: String, //req
  location: String, //req, will show on google maps. --change this to lat & lng for maps?
  date: String,
  time: String,
  peopleInterested: { type: Number, default: 0 }, //will update with a counter when people click on "interested" button
  externalResource: { type: String, default: '' },
  posterEmail: String,
  keywords: [ String ], //searchable . required.
  imageUrl: String
});

//our model to create events
var Event = mongoose.model('Event', EventSchema);
// var Event = mongoose.model('Keyword',KeywordSchema);

//to use elsewhere in our app
module.exports = Event;
