/*## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar   (need moment function for current time)
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future (function to append color on time blocks based on current time)
WHEN I click into a timeblock
THEN I can enter an event (save button )
WHEN I click the save button for that timeblock (function to save data to local storage)
THEN the text for that event is saved in local storage 
WHEN I refresh the page  (textarea save to local storage)
THEN the saved events persist*/



//time from moment on top of the page
$(getTime);
function getTime(){
$('#currentDay').text(moment().format('dddd, MMMM Do , HH:mm'));

colorBlock();
  setInterval(colorBlock, 60000);

  // time blocks update and local storage
  $(".time-block").each(function() {
    var block = $(this).attr("id");
    
    // saved data to local storage
    $("#" + block + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + block));
  });
  
  // save button 
  $(".saveBtn").on("click", save);
}

function colorBlock() {
  // function for each time block
  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
    var currentHour = parseInt(moment().format("H"));
    // reset work day
    $(this).removeClass("past present future");
    // block color based on past present future
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour > currentHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

function save() {
  // get id from html
  var hour = $(this).parent().attr("id");
  // textarea input saved to local storage
  localStorage.setItem(moment().format("DDDYYYY") + hour, $("#" + hour + " textarea").val());
}