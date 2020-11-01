$('.product-card__more-btn').on('click', function(event) {
    event.preventDefault();

    var productFeaturesOffset = $('.card-tabs__nav').offset().top;
    var productFeaturesTab = $('[data-product-features-tab]');
    
    tabs(productFeaturesTab);
    
    $("html, body").animate({
        scrollTop: productFeaturesOffset
    }, 500);
});