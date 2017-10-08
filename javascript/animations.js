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


$( document ).ready(function() {
  var cssSelector = anime({
    targets: '#animated-text-container .el',
    translateY: [30, 30],
    easing: 'easeInOutQuad',
    opacity: [0, 1],
    delay: 100,
    duration: 3000
  });

  var basicTimeline = anime.timeline();

  basicTimeline
    .add({
      opacity: 1,
      targets: '#services .services.el',
      translateY: -50,
      easing: 'easeOutExpo',
      duration: 500,
      delay: 100
    })
    .add({
      opacity: 1,
      targets: '#services .repair.el',
      translateY: -50,
      easing: 'easeOutExpo',
      duration: 500,
      delay: 100
    })
    .add({
      opacity: 1,
      targets: '#services .performance.el',
      translateY: -50,
      easing: 'easeOutExpo',
      duration: 500,
      delay: 100
    })
});
