(function($) {
  var $header = $('header');
  var $win = $(window);

  $win.scroll(function() {
    if ($win.scrollTop() > $win.height()) {
      $header.fadeIn();
    }
    else {
      $header.fadeOut();
    }
  });
}(jQuery));