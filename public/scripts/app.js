//need to add loop through keywords

$(document).ready(function() {
  console.log('app.js loaded!');

    $.ajax({
      method: 'GET',
      url: '/api/events',
      success: renderMultipleEvents,
      error: handleError
    }); //closes ajax get request

}); //closes DOM ready function

function renderMultipleEvents(events) {
  events.forEach(function(event) {
    renderEvent(event);
  }); //closes foreach
}//closes rendermult.

function renderEvent(event, keyword) {
  var eventHtml = (`
    <div class="row event">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-default">
          <div class="panel-body">
          <!-- begin event internal row -->
            <div class='row'>
              <div class="col-md-3 col-xs-12 thumbnail event-art">
                <img src="images/800x800.png" alt="event image">
              </div>
              <div class="col-md-9 col-xs-12">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4 class='inline-header'>Event Name:</h4>
                    <span class='event-name'>${event.eventName}</span>
                  </li>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Description:</h4>
                    <span class='eventDescription'>${event.description}</span>
                  </li>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Date</h4>
                    <span class='event-date'>${event.date}</span>
                  </li>
                  <li class="list-group-item">
                    <h4 class="inline-header">Keywords:</h4>
                    <span class='event-keywords'>${event.keyword.name}</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end of event internal row -->
            <div class='panel-footer'>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end one event -->
  `);
  $('.eventContainer').prepend(eventHtml);
}

function handleError(err) {
 console.log('error loading events!: ', err);
 $('.eventContainer').append('Sorry, there was a problem loading events.');
}
