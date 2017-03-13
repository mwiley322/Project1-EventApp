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

// lets us route to the controllers api index
app.get('/api', controllers.api.index);

//get all events
app.get('/api/events', controllers.events.index);
//
// //get one event
// app.get('/api/events/:id', controllers.event.show);
//
// //create an event
// app.post('/api/events', controllers.event.create);
//
// //update one event
// app.put('/api/events/:id', controllers.event.update);
//
// //delete one event
// app.delete('/api/events/:id', controllers.event.destroy);

////////////////////
//  SERVER LISTENER
///////////////////

app.listen(process.env.PORT || 3000, function () {
  console.log('So many fun things to do at host 3000!');
});
