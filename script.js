// variables to get time and date on screen 
var weekday = document.getElementById('currentDay')
var timeNow = document.getElementById('currentTime')

var d = new Date();
var dayofweek = d.getDay();
var hoursRealTime = d.getHours()
console.log(hoursRealTime)
var date= d.toLocaleString();

// var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM" ]

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

// $(document).ready(function() {
//     for (var i=0; i < hours.lenth; i++)
//     $('<div class="row" </div>').appendTo('.container');
// });

// $('<div class="row" </div>').appendTo('.container');

weekday.innerHTML = dayofweek;
currentTime.innerHTML = date;

// local storage code 
// var obj = "hi"


// localStorage.setItem("whatever II: Electric Boogaloo", JSON.stringify(obj))

// var IgotSomethingFromLocal = JSON.parse(localStorage.getItem("whatever"))
// console.log(IgotSomethingFromLocal)

// save events 
// var saveEvents = function() {
//     localStorage.setItem("events", JSON.stringify(events));
//   };


  