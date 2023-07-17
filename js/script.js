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