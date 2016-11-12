
$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $(".aboutTitle").offset().top-70
    }, 2000);
});
$("#project").click(function() {
    $('html, body').animate({
        scrollTop: $(".projects").offset().top-40
    }, 2000);
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".contactTitle").offset().top
    }, 2000);
});

$("#contactlink").click(function() {
    $('html, body').animate({
        scrollTop: $(".contactTitle").offset().top
    }, 2000);
});

$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $(".home").offset().top-60
    }, 2000);
});

$(document).ready(function() {

  // Initialize the plugin
  $('#nfl').popup();

});


$("#imagebox > div:gt(0)").hide();

setInterval(function() {
  $('#imagebox > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#imagebox');
},  9000);
