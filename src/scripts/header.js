$(window).scroll(function() {
  if ($(window).scrollTop() > $(window).height()) {
    $('header').fadeIn();
  }
  else {
    $('header').fadeOut();
  }
});