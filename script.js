$("#treasure_coins").hover(function() {
    $("#button1").show();
});

$("#button1").click(function() {
    $("#button2").css("display" ,"flex");
});

$("#button2").mouseenter(function() {
    $("#try").fadeIn();
});

$("#button2").mouseleave(function() {
    $("#try").fadeOut();
});

$("#button2").dblclick(function() {
    $("#button3").slideDown();
});

$("#button3").hover(function() {
    $("#now_what").show();
});

$("#button3").dblclick(function() {
    $("#The_End").show();
    $("#begin").hide();
});