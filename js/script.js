function revealBreak() {
    var reveals = document.querySelector(".reveal-break");
    // Determine position of element from top of viewport
    var viewportHeight = window.innerHeight;
    var distTop = reveals.getBoundingClientRect().top;
    console.log(distTop);

    // Reveal when distance from top of viewport is 150
    var becomeVisible = 150;
    // if (distTop < (viewportHeight - becomeVisible))
}

window.addEventListener("scroll", revealBreak);

// Navigation Toggle
jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu-list').toggleClass('active');

        e.preventDefault();
    });
});

// Hide navigation links when screen resizes to mobile
$(window).on("resize", function() {
    if ($(window).width() <= 640) {
        console.log("its happening");
        jQuery('.menu-list').addClass('active');
    } // mobile viewport
});