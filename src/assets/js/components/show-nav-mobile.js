$('.menu__toggle').on('click', function() {
    $(this).toggleClass('active');
    $('.nav-mobile').toggleClass('show');

    $('body').toggleClass('no-scroll');
});