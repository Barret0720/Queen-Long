// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    // console.log("run setInterval")
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(window).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
    // console.log("return")
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navbar').removeClass('nk-onscroll-show').addClass('nk-onscroll-hide');
        $('.nav-logo').removeClass('nk-onscroll-show').addClass('nk-onscroll-hide');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar').removeClass('nk-onscroll-hide').addClass('nk-onscroll-show');
            $('.nav-logo').removeClass('nk-onscroll-hide').addClass('nk-onscroll-show');
        }
    }
    
    lastScrollTop = st;
}