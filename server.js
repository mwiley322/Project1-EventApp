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
var db = require('./models');

////////////////////
//  ROUTES
///////////////////

// root route
app.get('/', function (req, res) { res.sendFile('views/index.html' , { root : __dirname}); });

// routes us to endpoint info
app.get('/api', controllers.api.index);

//get all events
app.get('/api/events', controllers.events.index);


// Search by event keyword
// app.get('/api/searchKeyword', function searchByKeyword(req, res) {
//     console.log("WE ARE IN SEARCHKEYWORD FUNCTION", req.query.keyword);
//     var query = req.query.keyword;
//     // db.Event.find(keywords: { "$in": [query]}).populate('')
//     // .exec(function (err, matchFound) {
//     //     if (err) { console.log(err); };
//     //     console.log(matchFound);
//     //     res.json(matchFound);
//     // });
// });

// Search by event date
// app.get('/api/searchDate', function searchByDate(req, res) {
//     console.log(req.query);
//     if (req.query == date) {
//         db.Event.find().populate('')
//         .exec(function(err, foundMatch) {
//             if (err) {console.log('Nooooooo', err)}
//             res.json(foundMatch);
//         });
//     } else {
//         var dateQuery = req.query.date;
//         db.Event.find({ date: dateQuery }).populate('')
//         .exec(function(err, foundMatch) {
//             if (err) {console.log('Err!', err)}
//             res.json(foundMatch);
//         });
//     }
// });


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
