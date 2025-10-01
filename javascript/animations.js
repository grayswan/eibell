var isOnScreen = function() {
  var win = $(window);

  var viewport = {
      top : win.scrollTop(),
      left : win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var bounds = win.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};


$(document).ready(function() {
  var cssSelector = anime({
    targets: '#animated-text-container .el',
    translateY: [30, 30],
    easing: 'easeInOutQuad',
    opacity: [0, 1],
    delay: 500,
    duration: 3000
  });
});
