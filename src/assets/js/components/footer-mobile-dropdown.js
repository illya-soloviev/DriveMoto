$('.footer__title--drop').on('click', function() {
    $(this).next().slideToggle('200');
    $(this).toggleClass('active');
});

var footerDropLists = $('.footer__title--drop').next();
var isMobiled = false;

$(window).on('resize', function() {
    var windowW = $(window).width();
    isMobiled = true;

    if( windowW > 1024 && isMobiled ) {
        $('.footer__title--drop').removeClass('active');
        footerDropLists.removeAttr('style');

        isMobiled = false;
    }
});