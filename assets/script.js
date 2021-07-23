var displayTime = document.querySelector("#currentDay");
var currentTime = moment();
displayTime.textContent = currentTime.format("dddd, MMMM Do")
$(".saveBtn").on("click", function() {
    // get row text field class and row id values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // save in localStorage
    localStorage.setItem(time /* aka KEY = row id */, value /* text in the textarea */);
});
// load any saved data from localStorage 
// 9:00 am
$("#9am-row .description").val(localStorage.getItem("9am-row" /* localStorage KEY also the row id */));
// 10:00 am
$("#10am-row .description").val(localStorage.getItem("#10am-row" /* localStorage KEY also the row id */));
// 11:00am
$("#11am-row .description").val(localStorage.getItem("11am-row" /* localStorage KEY also the row id */));
// 12:00pm
$("#12pm-row .description").val(localStorage.getItem("12pm-row" /* localStorage KEY also the row id */));
// 1:00pm
$("#1pm-row .description").val(localStorage.getItem("1pm-row" /* localStorage KEY also the row id */));
// 2:00m
$("#2pm-row .description").val(localStorage.getItem("2pm-row" /* localStorage KEY also the row id */));
// 3:00pm
$("#3pm-row .description").val(localStorage.getItem("3pm-row" /* localStorage KEY also the row id */));
// 4:00pm
$("#4pm-row .description").val(localStorage.getItem("4pm-row" /* localStorage KEY also the row id */));
// 5:00 pm
$("#5pm-row .description").val(localStorage.getItem("5pm-row" /* localStorage KEY also the row id */));
// converting time and display
var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour1 = 13;
var hour2 = 14;
var hour3 = 15;
var hour4 = 16;
var hour5 = 17;
var currentHour = moment().format('H');
// 9:00am 
if (currentHour < hour9) {
    $("#9am-text").addClass("future");
} else if (currentHour > hour9) {
    $("#9am-text").addClass("past");
} else if (currentHour = hour9) {
    $("#9am-text").addClass("present");
}
// 10:00am 
if (currentHour < hour10) {
    $("#10am-text").addClass("future");
} else if (currentHour > hour10) {
    $("#10am-text").addClass("past");
} else if (currentHour = hour10) {
    $("#10am-text").addClass("present");
}
// 11:00am
if (currentHour < hour11) {
    $("#11am-text").addClass("future");
} else if (currentHour > hour11) {
    $("#11am-text").addClass("past");
} else if (currentHour = hour11) {
    $("#11am-text").addClass("present");
}
// 12:00pm
if (currentHour < hour12) {
    $("#12pm-text").addClass("future");
} else if (currentHour > hour12) {
    $("#12pm-text").addClass("past");
} else if (currentHour = hour12) {
    $("#12pm-text").addClass("present");
}
// 1:00pm
if (currentHour < hour1) {
    $("#1pm-text").addClass("future");
} else if (currentHour > hour1) {
    $("#1pm-text").addClass("past");
} else if (currentHour = hour1) {
    $("#1pm-text").addClass("present");
}
// 2:00pm
if (currentHour < hour2) {
    $("#2pm-text").addClass("future");
} else if (currentHour > hour2) {
    $("#2pm-text").addClass("past");
} else if (currentHour = hour2) {
    $("#2pm-text").addClass("present");
}
// 3:00pm
if (currentHour < hour3) {
    $("#3pm-text").addClass("future");
} else if (currentHour > hour3) {
    $("#3pm-text").addClass("past");
} else if (currentHour = hour3) {
    $("#3pm-text").addClass("present");
}
// 4:00pm
if (currentHour < hour4) {
    $("#4pm-text").addClass("future");
} else if (currentHour > hour4) {
    $("#4pm-text").addClass("past");
} else if (currentHour = hour4) {
    $("#4pm-text").addClass("present");
}
// 5:00pm
if (currentHour < hour5) {
    $("#5pm-text").addClass("future");
} else if (currentHour > hour5) {
    $("#5pm-text").addClass("past");
} else if (currentHour = hour5) {
    $("#5pm-text").addClass("present");
}