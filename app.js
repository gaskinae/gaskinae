// Enable navigation with a clickable menu icon 
$(document).ready(function(){
    $("#menu").on("click", function(){
       $("#menu").css("opacity", "0");
        $("#lgMenu").addClass("enter");
    });
        $("#exit").on("click", function(){
           $("#lgMenu").removeClass("enter");
            $("#menu").css("opacity", "1");
        });
    });

// Navigation bar
function navBarFunction() {
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
}