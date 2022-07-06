
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

