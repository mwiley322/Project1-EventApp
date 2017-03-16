var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema ({
  eventName: String, //req
  description: String, //req
  location: String,
  date: String,
  time: String,
  peopleInterested: { type: Number, default: 0 }, //will update with a counter when people click on "interested" button
  externalResource: { type: String, default: '' },
  posterEmail: String,
  keywords: [ String ], //searchable . required.
  imageUrl: { type: String, default: 'images/NoImageFound.jpg' }
});

//our model to create events
var Event = mongoose.model('Event', EventSchema);

//to use elsewhere in our app
module.exports = Event;
