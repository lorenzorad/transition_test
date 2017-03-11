(function($) {
  var $staticContent = $('.container__static');
  var $lastFrame = $('.frame.frame--last');
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