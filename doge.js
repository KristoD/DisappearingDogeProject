$(document).ready(function () {

    for (var i = 0; i < 8; i++) {
        $("#content").append("<img src='doge.png'>")
    }

    $("img").click(function() {
        $(this).hide("slow");
    });

    $("button").click(function() {
        $("img").show("slow");
    });

});