//need to add loop through keywords

$(document).ready(function() {
  console.log('app.js loaded!');

    $.ajax({
      method: 'GET',
      url: '/api/events',
      success: renderMultipleEvents,
      error: handleError
    }); //closes ajax get request

    $('#createEvent').on('click', function postNewEvent(e) {
      e.preventDefault();
      var formData = $(this).serialize(); //translates request
      console.log('here is the form data: ', formData);
        $.post('/api/events', formData, function(event) {
          console.log('event to post: ', event);
          renderAlbum(album);
        }); //closes ajax post request
    renderEvent(event);
    }); //closes postNewEvent function

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
                    <h4 class='inline-header'>${event.eventName}</h4>
                  </li>
                  <li class="list-group-item">
                    <span class='eventLocation'>${event.location}</span>
                    <span class='eventTime pull-right'>- ${event.time}</span>
                    <span class='eventDate pull-right'>${event.date} -</span>

                  </li>
                  <li class="list-group-item">
                    <span class='eventDescription'>${event.description}</span>
                  </li>
                  <li class="list-group-item">
                    <span class='event-date'>${event.peopleInterested} people interested</span>
                  </li>
                  <li class="list-group-item">
                    <h4 class="inline-header">Keywords:</h4>
                    <span class='event-keywords'>${event.keywords}</span>
                  </li>
                </ul>
                <div class="col-xs-2">
                  <button type="button" class="btn btn-xs btn-info pull-right" id="moreEventInfo" data-toggle="modal" data-target="#moreEventInfoModal">
                    Learn more
                  </button>
                  <!-- Modal -->
                  <div class="modal fade" id="moreEventInfoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <legend class="modal-title" id="learnMoreLabel">${event.eventName}</legend>
                        </div>
                        <div class="modal-body">
                          <form class="form-horizontal">
                            <fieldset>
                            Hello
                        <div class="form-group modal-footer">
                          <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                        </div>
                      </div>
                    </fieldset>
                    </div>
                  </div>
              </div>

                </div>
              </div>
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
