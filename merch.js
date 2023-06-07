$(document).ready(function(){
  var carousel = $("#carousel");

  carousel.owlCarousel({
    loop: true,
    nav: false, 
    dots: true,
    autoplay: true, 
    autoplayTimeout: 3000, 
    autoplayHoverPause: true,
    center: true, // Important to set center to true
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    },
    onInitialized  : active,
    onTranslated : active
  });

  function active(){
    var current = $('.owl-carousel').find('.active.center').length;
    if(!current){
      $('.owl-carousel').find('.active').eq(1).addClass('center');
    }
  }

  // Go to the next item
  $('.arrow-right').click(function() {
      carousel.trigger('next.owl.carousel');
  })

  // Go to the previous item
  $('.arrow-left').click(function() {
      carousel.trigger('prev.owl.carousel');
  })
});
