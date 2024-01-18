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

// Skills card pagination 
$(document).ready(function () {
    const cards = $('.skill-card');
    const cardCount = cards.length;
    let currentCard = 0;

    $('#next').on('click', function () {
        if (currentCard < cardCount - 1) {
            currentCard++;
            updateDisplay();
        }
    });

    $('#prev').on('click', function () {
        if (currentCard > 0) {
            currentCard--;
            updateDisplay();
        }
    });

    function updateDisplay() {
        const offset = -currentCard * 100 + '%';
        $('.skills-container').css('transform', 'translateX(' + offset + ')');
    }
});
