var db = require("./models");


var eventData = [];

eventData.push({
    eventName: 'JavaScript For Beginners',
    description: 'Learn javascript fundamentals',
    location: 'San Francisco, California',
    category: 'Javascript', //dropdown menu with pre-made selections
    date: '2017-03-15',
    time: '1:00PM',
    posterEmail: 'Mwiley322@gmail.com',
    externalResource: 'www.Stackoverflow.com', //show as links
    imageUrl: 'http://www.b2bweb.fr/wp-content/uploads/js-logo-badge-256.png',
    keywords: ['Python', 'La Croix', 'JavaScript', 'Beginners', 'Fundamentals']
});
eventData.push({
    eventName: 'Learn HTML & CSS',
    description: 'Learn the structure of web design',
    location: 'Berkeley, California',
    date: '2017-05-19',
    time: '9:00AM',
    posterEmail: 'Lamar123@aol.com',
    imageUrl: 'https://uploads.toptal.io/blog/category/logo/364/CSS.png',
    keywords: ['HTML', 'CSS', 'Web design', 'Design']
});
eventData.push({
    eventName: 'Technical Interview Prep',
    description: 'Get a better understanding of Javascript, different interview strategies, and considerations',
    location: 'San Jose, California',
    category: 'Javascript', //dropdown menu with pre-made selections
    date: '2017-04-20',
    time: '4:20PM',
    posterEmail: 'User@user.com',
    externalResource: 'www.codeacademy.com', //show as links
    imageUrl: 'http://farm6.static.flickr.com/5215/5493668169_4683cb1a03_m.jpg',
    keywords: ['Interview', 'Whiteboarding', 'Algorithms', 'JavaScript']
});
eventData.push({
    eventName: 'We Tell You What Colors Your Buttons Should Be',
    description: 'UX Designers <> Code Monkeys. Get to know what being a UXer is all about. They will regale you with their app hopes and dreams...then you will crush them when you tell them their features aren’t feasible.',
    location: 'San Francisco, California',
    category: 'Networking', //dropdown menu with pre-made selections
    date: '2017-04-24',
    time: '6:00PM',
    posterEmail: 'WICKEDCOOL1@aol.com',
    externalResource: 'www.generalassemb.ly', //show as links
    imageUrl: 'https://codykriechfitness.files.wordpress.com/2015/03/crushed-dreams.jpg',
    keywords: ['Photoshop', 'UX', 'Design', 'UI']
});
eventData.push({
    eventName: 'Support Group for Techies With Soylent-Induced Tummy Aches',
    description: 'Your body is revolting against you, we get it. Learn how to love solid foods again with help from mandable exercise specialists and certified nutritionists.',
    location: 'San Francisco, California',
    date: '2017-06-24',
    time: '5:20PM',
    posterEmail: 'CrocodileFire@aol.com',
    externalResource: 'www.generalassemb.ly', //show as links
    imageUrl: 'http://theladybites.co.uk/wp-content/uploads/2013/02/Couple-feeding-each-other.jpg',
    keywords: ['Picnic', 'Soylent', 'Exercise', 'Other']
});

db.Event.remove({}, function(err, events) {
    db.Event.create(eventData, function(err, events) {
        if (err) { return console.log('ERROR', err); }
        console.log("all events: ", events);
        console.log("created ", eventData.length, " events");
        process.exit();
    }); //closes create function
}); //closes remove function
