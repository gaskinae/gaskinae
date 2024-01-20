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

// Skills
document.addEventListener('DOMContentLoaded', function () {
    const skillIcons = document.querySelectorAll('.skill-icon');

    skillIcons.forEach(icon => {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = icon.getAttribute('data-tooltip');
        icon.appendChild(tooltip);
    });
});

$(document).ready(function () {
    // Enable navigation with a clickable menu icon
    $("#menu").on("click", function () {
        $("#menu").css("opacity", "0");
        $("#lgMenu").addClass("enter");
    });

    $("#exit").on("click", function () {
        $("#lgMenu").removeClass("enter");
        $("#menu").css("opacity", "1");
    });

    // Smooth scrolling for anchor links
    $('a.nav-link').on('click', function (event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const skillIcons = document.querySelectorAll('.skill-icon');

    skillIcons.forEach(icon => {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = icon.getAttribute('data-tooltip');
        icon.appendChild(tooltip);
    });
});
