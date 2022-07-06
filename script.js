$(getTime);
function getTime(){
$('#currentDay').text(moment().format('dddd, MMMM Do , HH:mm'));
}