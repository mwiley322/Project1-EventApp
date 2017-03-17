function index(req, res) {
  //excellent documentation and style
  res.json({
    message: 'Welcome to TechSpace! Your main hub for local tech events',
    documentation_url: 'https://github.com/mwiley322/Project1-EventApp',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      },
      {
        method: 'GET', path: '/api/events', description: 'Gets all events within the database'
      },
      {
        method: 'GET', path: '/api/searchKeyword', description: 'Searches the database by keyword'
      },
      {
        method: 'GET', path: '/api/searchDate', description: 'Searches the database by event date'
      },
      {
        method: 'GET', path: '/api/events/:id', description: 'Gets a single event based on parameters'
      },
      {
        method: 'POST', path: '/api/events', description: 'Creates a single new event'
      },
      {
        method: 'POST', path: '/api/events/:id', description: 'Updates a single existing event'
      },
      {
        method: 'DELETE', path: '/api/events/:id', description: 'Destroys a single event'
      }
    ]//closes endpoints array
  }); //closes json object to send
} //closes index function

//export for use elsewhere in app
module.exports = {index: index};
