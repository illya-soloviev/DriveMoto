$('.catalog__display-btn--grid').on('click', function() {
    $(this).addClass('active');
    $('.catalog__display-btn--list').removeClass('active');

    $('.catalog__products-col').removeClass('catalog__products-col--list');
});

$('.catalog__display-btn--list').on('click', function() {
    $(this).addClass('active');
    $('.catalog__display-btn--grid').removeClass('active');

    $('.catalog__products-col').addClass('catalog__products-col--list');
});