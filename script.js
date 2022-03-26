// Date for the header
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// Inital function for writing to local storage from input
$(document).ready(function () {    
    $(".saveBtn").on("click", function () {        
        var text = $(this).siblings(".description").children(".to-do").val();
        var time = $(this).siblings(".time-block").attr("id");        
        localStorage.setItem(time, text);
    })

    //track of time based on moment js 
    function timeTracker() {        
        var timeNow = moment().hour();        
        $(".time-block").each(function (ele) {
            console.log($(this))
            var blockTime = parseInt($(this).attr("id").split("r")[1]);
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
// 4: Locaal storage 
$("#hour9 .to-do").val(localStorage.getItem("hour9"));
$("#hour10 .to-do").val(localStorage.getItem("hour10"));
$("#hour11 .to-do").val(localStorage.getItem("hour11"));
$("#hour12 .to-do").val(localStorage.getItem("hour12"));
$("#hour13 .to-do").val(localStorage.getItem("hour13"));
$("#hour14 .to-do").val(localStorage.getItem("hour14"));
$("#hour15 .to-do").val(localStorage.getItem("hour15"));
$("#hour16 .to-do").val(localStorage.getItem("hour16"));
$("#hour17 .to-do").val(localStorage.getItem("hour17"));
$("#hour18 .to-do").val(localStorage.getItem("hour18"));

// timeTracker();
})

            




