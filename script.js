// variables to get time and date on screen 
var weekday = document.getElementById('currentDay')
var timeNow = document.getElementById('currentTime')

var d = new Date();
var dayofweek = d.getDay();
var hourOfTimEoFdAYoFToday = d.getHours()
console.log(hourOfTimEoFdAYoFToday)
var date= d.toLocaleString();

var hours = ["9AM", "10AM", "11AM"]

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


localStorage.setItem("whatever II: Electric Boogaloo", JSON.stringify(obj))

var IgotSomethingFromLocal = JSON.parse(localStorage.getItem("whatever"))
console.log(IgotSomethingFromLocal)

// save events 
// var saveEvents = function() {
//     localStorage.setItem("events", JSON.stringify(events));
//   };


  