(function($) {
  var $win = $(window);
  var toggledInPage = true;
  var toggledOutsidePage = false;

  $win.scroll(function() {
    if (!toggledOutsidePage && $win.scrollTop() > $win.height()) {
      toggledInPage = false;
      $('.fade-back__elem').fadeToggle('slow');
      toggledOutsidePage = true;
    }

    if (!toggledInPage && $win.scrollTop() < $win.height()) {
      toggledOutsidePage = false;
      $('.fade-back__elem').fadeToggle('slow');
      toggledInPage = true;
    }
  });
}(jQuery));