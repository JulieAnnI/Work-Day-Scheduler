
//Javascript will not run until HTML finishes loading
$(document).ready(function(){

    //Displays Current Day     
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    

    //Save Button Listener
    $(".saveBTN").on("click", function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time,text);
    })
});

