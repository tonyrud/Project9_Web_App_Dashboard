(function($) {

    /*****************
    Variables
    ******************/

    // Top nav variables
    var $nav = $('#main-nav');
    var $icon = $('.icon');
    var animSlideSpeed = 400;
    var lineTop = $('.line-top');
    var lineMid = $('.line-mid');
    var lineBottom = $('.line-bottom');

    //Dashboard variables
    var $chartNav = $('#chart-links li')


    $nav.css('left', -$nav.outerWidth());

    /*****************
    Click Events
    ******************/

    //event for nav icon
    $icon.click(function(event) {
      $nav.css('display', 'block');

        lineTop.toggleClass('line-top-anim');
        lineMid.toggleClass('line-mid-anim');
        lineBottom.toggleClass('line-bottom-anim');

        $nav.animate({left: parseInt($nav.css('left'),10) == 0 ? -$nav.outerWidth() :
        0 },
        'ease-in-out', function(){

          if (parseInt($nav.css('left'),10) < 0) {
              //remove from DOM after animation
              $nav.css('display', 'none');
          } else {
          }
        });
    });

    //event for chart nav
    $chartNav.click(function(event) {
      let clicked = $(this);
      $chartNav.removeClass('active');
      clicked.addClass('active')
    });


})(jQuery);
