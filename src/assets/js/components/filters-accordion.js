$('.aside-filter__item-title--drop, .aside-filter__extra-title').on('click', function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle('200');
});