/* Slick slider [https://kenwheeler.github.io/slick/] */

$('.products__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="products__slider-btn  products__slider-btn--prev"><img src="assets/img/arrow-left-black.svg" alt=""></button>',
    nextArrow: '<button class="products__slider-btn  products__slider-btn--next"><img src="assets/img/arrow-right-black.svg" alt=""></button>',
    responsive: [
        {
            breakpoint: 1301,
            settings: {
            arrows: false,
            dots: true
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 813,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 569,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }
    ]
});