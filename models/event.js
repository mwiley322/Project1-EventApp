var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//challenge: in real-world applications, you can prevent people from upvoting
//multiple times on a single event using sessions/cookies
var EventSchema = new Schema ({
  eventName: String, //req
  description: String, //req
  location: String,
  date: String,
  time: String,
  peopleInterested: { type: Number, default: Math.floor(Math.random() * 82) }, //will update with a counter when people click on "interested" button
  externalResource: { type: String, default: '' },
  posterEmail: String,
  keywords: [ String ], //searchable . required.
  imageUrl: { type: String, default: 'images/NoImageFound.jpg' }//nice
});

//our model to create events
var Event = mongoose.model('Event', EventSchema);

//to use elsewhere in our app
module.exports = Event;
