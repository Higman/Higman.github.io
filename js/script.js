/*
Copyright (c) 2019 Christopher Antonellis & @ctrl-freaks
Code released under the MIT license
https://opensource.org/licenses/mit-license.php
*/

new Freezeframe('.freezeframe-gif', {
  overlay: true
});

// start rate
$(document).ready(function() {
  $('[class*=star-rating-icon]').each(function() {
    if(r = $(this).prop('className').match(/(?:^| )star-rating-icon([0-5]+)(?: |$)/)) {
      num = r[1];
    } else {
      num = 0;
    }
    for (i = 0; i < 5; i++) {
      s = i < num ? 'icon-star' : 'icon-star-o'
      $(this).append(`<span class="${s}"></span>`);
    }
  })
});

// smooth scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});