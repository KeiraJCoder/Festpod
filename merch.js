$(document).ready(function(){
  var carousel = $("#carousel");

  carousel.owlCarousel({
    items: 1,
    loop: true,
    nav: false, // you should disable the nav provided by Owl Carousel as you have custom nav buttons
    dots: true
    // You can customize the carousel options as per your requirements
  });

  // Go to the next item
  $('.arrow-right').click(function() {
      carousel.trigger('next.owl.carousel');
  })

  // Go to the previous item
  $('.arrow-left').click(function() {
      carousel.trigger('prev.owl.carousel');
  })

  carousel.on('changed.owl.carousel', function(event) {
    var currentItemIndex = event.item.index;
    var totalItems = event.item.count;

    // Show/hide navigation arrows based on current item index
    if (currentItemIndex === 0) {
      $('.arrow-left img').hide();
    } else {
      $('.arrow-left img').show();
    }

    if (currentItemIndex === totalItems - 1) {
      $('.arrow-right img').hide();
    } else {
      $('.arrow-right img').show();
    }
  });
});

const carousel = document.querySelector('.owl-carousel');
const arrowLeft = document.querySelector('.arrow-left img');
const arrowRight = document.querySelector('.arrow-right img');

carousel.addEventListener('focusin', () => {
  arrowLeft.style.display = 'block';
  arrowRight.style.display = 'block';
});

carousel.addEventListener('focusout', () => {
  arrowLeft.style.display = 'none';
  arrowRight.style.display = 'none';
});
