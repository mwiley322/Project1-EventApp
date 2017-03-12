var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema ({
  eventName: String, //req
  description: String, //req
  location: String, //req, will show on google maps.
  date: String,
  time: String,
  peopleInterested: { type: Number, default: 0 }, //will update with a counter when people click on "interested" button
  externalResource: { type: String, default: '' },
  keywords: [ String ] //searchable . required.
);

//our model to create events
var Event = mongoose.model('Event', eventSchema);

//to use elsewhere in our app
module.exports = Event;
