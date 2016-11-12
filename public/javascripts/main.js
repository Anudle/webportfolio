
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

// $('a[href*="#"]:not([href="#"])').click(function() {
//   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     if (target.length) {
//       $('html, body').animate({
//         scrollTop: target.offset().top
//       }, 1000);
//       return false;
//     }
//   }
// });
