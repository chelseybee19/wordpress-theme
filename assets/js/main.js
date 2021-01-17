$(function() {
    // cache window object
    var $window = $(window);

    //paralax background effect
    $('section[data-type="background"]').each(function() {
        var $bgobj = $(this);

        $(window).scroll(function() {
            //scroll the backgrouns at var speed
            //the y is a negative value beacause we are scrolling it up!

            var yPos = -($window.scrollTop()/ $bgobj.data('speed'));

            //put together final background position

            var coords = '50% ' + yPos + px;

            //move the background

            $bgobj.css({backgroundPosition: coords});
        });
    });
});