var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema ({
  eventName: String,
  description: String,
  location: String,
  category: String, //dropdown menu with pre-made selections
  startDate: String,
  endDate: String,
  startTime: String,
  endTime: String,
  peopleInterested: 0,
  externalResources: [ String ] //show as links
  keywords: [ String ] //searchable
);

//our model to create events
var Event = mongoose.model('Event', eventSchema);

//to use elsewhere in our app
module.exports = Event;
