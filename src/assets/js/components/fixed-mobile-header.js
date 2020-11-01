var scrollOffset = $(window).scrollTop();

function checkScroll(scrollOffset) {
    if( scrollOffset>= headerH ) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }


    // console.log(scrollOffset);
}

checkScroll(scrollOffset);

$(window).on('scroll', function() {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
});



