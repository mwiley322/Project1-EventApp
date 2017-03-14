console.log('app.js is loaded!');

$(document).ready(function() {
  console.log('dom is loaded!');

    $.ajax({
      method: 'GET',
      url: '/api/events',
      success: renderMultipleEvents,
      error: handleError
    }); //closes ajax get request

    $('#createEvent').on('click', handleNewEventSubmit);

    // $('#createEvent').on('submit', function postNewEvent(e) {
    //   e.preventDefault();
    //   // var formData = {thing: value, doohickey: with another value}; //translates request
    //   console.log('here is the form data: ', formData);
    //     // BODY - so we need to access it in the server via req.body
    //     $.post('/api/events', formData, function(event) {
    //       console.log('event to post: ', event);
    //       renderEvent(event);
    //     }); //closes ajax post request
    //   $('form').trigger('reset');
    // }); //closes postNewEvent function




}); //closes DOM ready function

function renderMultipleEvents(events) {
  events.forEach(function(event) {
    renderEvent(event);
  }); //closes foreach
}//closes rendermult.

function renderEvent(event) {
  var keyWordArray = event.keywords;
  keyWordArray = keyWordArray.map( function ripActualKeywordsOut(keyWord){
    return keyWord.name;
  });
  event.keywords = keyWordArray.join(', ');
  var eventHtml = (`
        <div class="panel panel-default">
          <div class="panel-body">
          <!-- begin event internal row -->
            <div class='row'>
              <div class="col-lg- col-md-3 col-xs-12 thumbnail event-art">
                <img src="${event.imageUrl}" class="responsive-img" alt="event image">
              </div>
              <div class="col-md-9 col-xs-12">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4 class='inline-header'>${event.eventName}</h4>
                  </li>
                  <li class="list-group-item">
                    <span class='eventLocation'>${event.location}</span>

                    <span class='eventTime pull-right'>&#160;${event.time}</span>
                    <span class='eventDate pull-right'>${event.date}</span>
                    <span class='eventTime pull-right'>- ${event.time}</span>
                    <span class='eventDate pull-right'>${event.date} -</sp

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
                  <div class="modal fade" id="moreEventInfoModal" tabindex="-1" role="dialog" aria-labelledby="moreEventInfoModalLabel">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body">
                          <form class="form-horizontal">

                          <div class="row event">
                            <div class="col-md-10 col-md-offset-1">
                              <div class="panel panel-default">
                                <div class="panel-body">
                                <!-- begin event internal row -->
                                  <div class='row'>
                                    <div class="col-lg- col-md-3 col-xs-12 thumbnail event-art">
                                      <img src="http://wp.streetwise.co/wp-content/blogs.dir/2/files/2015/12/Ladies_Learning_Code_event_November_26_2011-630x420.jpg" class="responsive-img" alt="event image">
                                    </div>
                                    <div class="col-md-9 col-xs-12">
                                      <ul class="list-group">
                                        <li class="list-group-item">
                                          <h4 class='inline-header'>${event.eventName}</h4>
                                        </li>
                                        <li class="list-group-item">
                                          <span class='eventLocation'>${event.location}</span>
                                          <span class='eventTime pull-right'>&#160;${event.time}</span>

                                          <span class='eventDate pull-right'>${event.date}</span>

                                        </li>
                                        <li class="list-group-item">
                                          <span class='eventDescription'>Hello students! Our next event will be held at 1-5PM. Chime in on this issue to join us as a mentor or student for this event!</span>
                                        </li>
                                        <li class="list-group-item">
                                          <span class='event-date'>19 people interested</span>
                                        </li>
                                        <li class="list-group-item">
                                          <h4 class="inline-header">Keywords:</h4>
                                          <span class='event-keywords'>${event.keywords}</span>
                                        </li>
                                      </ul>

                            <fieldset>

                        <ul class="pull-right" style="list-style-type:none">
                        <li><b>Event Name:</b>Text Here</li>
                        <li><b>Location:</b>City, State</li>
                        <li><b>Date:</b> 02/20/2017</li>
                        <li><b>Time:</b> 8:00</li>
                        </ul>
                            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQaVz3lAJ2zFCc52NKlX6bTjajPRrzcFqQ15FB5Vd6G5sisWS2Vw4cWHPs" alt="event image">
                            <hr>
                            <b>Description:</b>
                            <p align="justify style="text-align:center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus magna neque, vitae cursus nunc mollis et.</p>
                            </fieldset>

                        <div class="form-group modal-footer">
                          <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

                </div>
              </div>
              </div>
            </div>
            <!-- end of event internal row -->

            </div>
          </div>
        </div>


    <!-- end one event -->
  `);
  $('.eventContainer').prepend(eventHtml);
}


function handleNewEventSubmit(e) {
  e.preventDefault();
  var $newEventModal = $('#newEventModal');
  var $name = $newEventModal.find('#name');
  var $eventLocation = $newEventModal.find('#eventLocation');
  var $eventDate = $newEventModal.find('#eventDate');
  var $email = $newEventModal.find('#posterEmail');
  var $links = $newEventModal.find('#externalResource');
  var $imageUrl = $newEventModal.find('#imageUrl');
  var $desc = $newEventModal.find('#eventDescription');
  var $eventTime= $newEventModal.find('#eventTime');
  // get data from modal fields
  var dataToPost = {
    eventName: $name.val(),
    location: $eventLocation.val(),
    date: $eventDate.val(),
    time: $eventTime.val(),
    posterEmail: $email.val(),
    externalResource: $links.val(),
    description: $desc.val(),
    imageUrl: $imageUrl.val()
  };
  // var eventId = $newEventModal.data('eventId');
  console.log('retrieved new event!', dataToPost);
  // POST to SERVER
  // var eventPostToServerUrl = '/api/event/'+ eventId + '/events';
    $.post('/api/events', dataToPost, function(data) {
      console.log('received data from post to /events:', data);
      // clear form
      $name.val('');
      $eventLocation.val('');
      $eventDate.val('');
      $eventTime.val('');
      $email.val('');
      $links.val('');
      $desc.val('');
      $imageUrl.val('');
      // close modal
      $newEventModal.modal('hide');
      renderEvent(data);
    }); //closes post request
} //closes function


function handleError(err) {
 console.log('error loading events!: ', err);
 $('.eventContainer').append('Sorry, there was a problem loading events.');
}
