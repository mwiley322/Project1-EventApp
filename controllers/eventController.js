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

// POST /api/events
function create(req, res) {
  var newEvent = new db.Event(req.body);
  db.Event.create(newEvent, function(err, createdEvent) {
    if(err){return console.log(err);}
    console.log('made new event: ', createdEvent);
    res.json(createdEvent);
  });
}//closes create function

module.exports = {
  index: index,
  show: show,
  create: create
};
