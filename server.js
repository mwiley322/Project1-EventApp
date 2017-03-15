////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    controllers = require('./controllers');

////////////////////////////
//  MIDDLEWARE
/////////////////////////////

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


////////////////////
//  ROUTES
///////////////////

// root route
app.get('/', function (req, res) { res.sendFile('views/index.html' , { root : __dirname}); });

// routes us to endpoint info
app.get('/api', controllers.api.index);

//get all events
app.get('/api/events', controllers.events.index);

//get one event by specified parameters
app.get('/api/events/:id', controllers.events.show);

// create an event
app.post('/api/events', controllers.events.create);

//update one event
app.put('/api/events/:id', controllers.events.update);

//delete one event
app.delete('/api/events/:id', controllers.events.destroy);

////////////////////
//  SERVER LISTENER
///////////////////

app.listen(process.env.PORT || 3000, function () {
  console.log('So many fun things to do at host 3000!');
});
