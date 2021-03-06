var db = require('../models');

// GET /api/events
function index(req, res) {
  db.Event.find({}, function(err, allEventsFound){
    if (err) { return console.log('index err!: ', err); }
    res.json(allEventsFound);
  }); //closes Event find
}//closes index function

// GET /api/events/:id
function show(req, res) {
  var eventId = req.params.id
  console.log('event show: ', req.params);
  db.Event.findById(eventId, function(err, foundEvent) {
    if (err) {
      res.sendStatus(204);
    } else {
      res.json(foundEvent);
    } //closes else statement
  }); //closes findById function
} //closes show function

// GET /api/searchKeyword
function searchKeyword(req, res) {
  var searchQuery = req.query.keyword;
  db.Event.find({keywords: searchQuery}, function(err, matchedEvents){
    if (err)
      console.log('SEARCH FUNCTION ERROR: ', err)
    else {
      console.log('OUR MATCHED EVENTS ARE: ', matchedEvents);
      res.json(matchedEvents);
    }//closes else statement
  });
}

function searchDate(req, res) {
  var searchQuery = req._parsedOriginalUrl.query;
  db.Event.find({date: searchQuery}, function(err, matchedEvents){
    if (err) {
      console.log('SEARCH FUNCTION ERROR: ', err)
    } else {
      console.log('OUR MATCHED EVENTS ARE: ', matchedEvents);
      res.json(matchedEvents);
    }//closes else statement
  }); //closes searchDate function
}

// POST /api/events
function create(req, res) {
  var newEvent = new db.Event(req.body);
  db.Event.create(newEvent, function(err, createdEvent) {
    if(err){return console.log(err);}
    res.json(createdEvent);
  });
}//closes create function

// PUT /api/events/:id
function update(req, res) {
  console.log('event update: ', req.params);
  var eventId = req.params.id; //id to search
  var eventToUpdate = req.body; //form data to update
  db.Event.findByIdAndUpdate(eventId, eventToUpdate, {new: true}, function(err, updatedEvent) { //newtrue means that it sends back the updated version
    if (err) { console.log('err!: ', err);
      res.sendStatus(204);
    } else {
      console.log(updatedEvent);
      res.json(updatedEvent);
    } //closes else statement
  }); //closes findByIdAndUpdate
} //closes update function

// DELETE /api/events/:id
function destroy(req, res) {
  console.log('event to delete:', req.params);
  var eventId = req.params.id;
  db.Event.findByIdAndRemove(eventId, function(err, deletedEvent) {
    if (err) {
      console.log('err! ', err);
    } else {
      res.json(deletedEvent);
    } //closes else statement
  });//closes findByIdAndRemove
} //closes destroy function

module.exports = {
  index: index,
  searchKeyword: searchKeyword,
  searchDate: searchDate,
  show: show,
  create: create,
  update: update,
  destroy: destroy
};
