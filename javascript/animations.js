$( document ).ready(function() {
  var cssSelector = anime({
    targets: '#animated-text-container .el',
    translateY: [30, 30],
    easing: 'easeInOutQuad',
    opacity: [0, 1],
    delay: 1000,
    duration: 3500
  });
});
