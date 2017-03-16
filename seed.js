var db = require("./models");


var eventData = [];
eventData.push({
    eventName: 'JavaScript For Beginners',
    description: 'Learn javascript fundamentals',
    location: 'San Francisco, California',
    category: 'Javascript', //dropdown menu with pre-made selections
    date: '03/23/2017',
    time: '1:00pm',
    posterEmail: 'Lamar123@aol.com',
    externalResource: 'www.Stackoverflow.com', //show as links
    imageUrl: 'http://www.b2bweb.fr/wp-content/uploads/js-logo-badge-256.png',
    keywords: ['Python', 'La Croix', 'JavaScript', 'Beginners', 'fundamentals']
});
eventData.push({
    eventName: 'Learn HTML & CSS',
    description: 'Learn the structure of web design',
    location: 'Berkeley, California',
    date: '05/17/2017',
    time: '9:00am',
    posterEmail: 'Lamar123@aol.com',
    imageUrl: 'https://uploads.toptal.io/blog/category/logo/364/CSS.png',
    keywords: ['HTML', 'CSS', 'Web design', 'Design']
});
eventData.push({
    eventName: 'Technical Interview Prep',
    description: 'Get a better understanding of Javascript, different interview strategies, and considerations',
    location: 'San Jose, California',
    category: 'Javascript', //dropdown menu with pre-made selections
    date: '04/20/2017',
    time: '4:20pm',
    posterEmail: 'Lamar123@aol.com',
    externalResource: 'www.codeacademy.com', //show as links
    imageUrl: 'http://farm6.static.flickr.com/5215/5493668169_4683cb1a03_m.jpg',
    keywords: ['Interview', 'Whiteboarding', 'Algorithms', 'JavaScript']
});

db.Event.remove({}, function(err, events) {
    db.Event.create(eventData, function(err, events) {
        if (err) { return console.log('ERROR', err); }
        console.log("all events: ", events);
        console.log("created ", eventData.length, " events");
        process.exit();
    }); //closes create function
}); //closes remove function
