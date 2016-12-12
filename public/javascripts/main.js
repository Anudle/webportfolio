//navbar
$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $(".aboutTitle").offset().top-78
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
        scrollTop: $(".home").offset().top-100
    }, 2000);
});


//pop ups
$(document).ready(function() {
  $('#nfl').popup();
});

$(document).ready(function() {
  $('#scurry').popup();
});

$(document).ready(function() {
  $('#python').popup();
});
$(document).ready(function() {
  $('#book').popup();
});
$(document).ready(function() {
  $('#cap').popup();
});


//scrolling images
$("#imagebox > div:gt(0)").hide();

setInterval(function() {
  $('#imagebox > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#imagebox');
},  9000);

$("#scurryimagebox > div:gt(0)").hide();

setInterval(function() {
  $('#scurryimagebox > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#scurryimagebox');
},  9000);


$("#arcadeimagebox > div:gt(0)").hide();

setInterval(function() {
  $('#pythonimagebox > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#pythonimagebox');
},  9000);

$("#bookimagebox > div:gt(0)").hide();

setInterval(function() {
  $('#bookimagebox > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#bookimagebox');
},  9000);


$("#capimagebox > div:gt(0)").hide();

setInterval(function() {
  $('#capimagebox > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#capimagebox');
},  9000);
