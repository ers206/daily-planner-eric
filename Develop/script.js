// variables to get time and date on screen 
var weekday = document.getElementById('currentDay')
var timeNow = document.getElementById('currentTime')

var d = new Date();
var dayofweek = d.getDay();
var date= d.toLocaleString();

switch(dayofweek){
    case 0:
        dayofweek = "Sunday";
        break;
    case 1:
        dayofweek = "Monday";
        break; 
    case 2:
        dayofweek = "Tuesday";
        break;
    case 3:
        dayofweek = "Wednesday";
        break;
    case 4:
        dayofweek = "Thursday";
        break;
    case 5:
        dayofweek = "Friday";
        break;
    case 6: 
        dayofweek = "Saturday"   
}  
     
weekday.innerHTML = dayofweek;
currentTime.innerHTML = date;
// save events 
// var saveEvents = function() {
//     localStorage.setItem("events", JSON.stringify(tasks));
//   };
  