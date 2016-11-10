$("#NFL > div:gt(0)").hide();

setInterval(function() {
  $('#NFL > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#NFL');
},  9000);
