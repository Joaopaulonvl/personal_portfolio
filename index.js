$("document").ready(function(){
    $("#hangmanCodeButton").on("click", function(){
        window.open("https://github.com/Joaopaulonvl/hangman_bomberman", "_blank");
    });
    $("#hangmanOnlineButton").on("click", function(){
        window.open("https://joaopaulonvl.github.io/hangman_bomberman", "_blank");
    });
    $(".hbutton").click(function(e){
        e.preventDefault();

        var targetSection = "#" + $(this).data("target");
        var currentSection = $(".tab-content:visible");
        if (currentSection.attr("id") === $(this).data("target")) {
            return;
        }

        currentSection.fadeOut(300, function() {
            $(targetSection).fadeIn(300);
        });
    });
    $("#gitAllButton").on("click", function(){
        window.open("https://github.com/Joaopaulonvl?tab=repositories");
    })
});
