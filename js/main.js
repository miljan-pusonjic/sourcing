//typed biblioteka
var typed = new Typed('.element', {
    strings: ['junior developer', 'full team'],
    loop: true,
    typeSpeed: 100,
    smartBackspace: true,
    backSpeed: 100,
    loopCount: Infinity
  });

//navigacija
$(window).on('scroll', function() {
  var scroll = $(window).scrollTop();
  if(scroll >= 100) {
    $('.navbar').addClass('sticky');
  } else {
    $('.navbar').removeClass('sticky');
  }
})

//slajder
$('.carousel').carousel({
    interval: 7000
  })
