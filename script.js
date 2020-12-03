$(document).ready(function(){
    
    //Variables
    var currentHour = moment().hour();  
    var events = []
    
    
    //Displays Current Day     
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    

    //Displays Stored Data
    var storedEvents = JSON.parse(localStorage.getItem("events"));

    if (storedEvents !== null) {
        events = storedEvents;
    }

    for(var i = 0; i < events.length; i++) {
        var userDescription = events[i].description;
        $("#" + events[i].time).children(".description").text(userDescription);
      }


   
    //Save Button Listener
    $(".saveBtn").on("click", function(){
        
       var text = $(this).siblings(".description").val();
       var time = $(this).parent().attr("id");
       var dateAdded = moment().format("dddd, MMM Do");

       events.push ({description: text, time: time, date: dateAdded});

       localStorage.setItem("events", JSON.stringify(events));
       console.log(localStorage)
    });



    //Changes colors based on current time
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id"));
    
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })

  
});

