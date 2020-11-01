/* Slick slider [https://kenwheeler.github.io/slick/] */

$('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn  banner-section__slider-btn--prev"><img src="assets/img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn  banner-section__slider-btn--next"><img src="assets/img/arrow-right.svg" alt=""></button>',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false
          }
        }
    ]
});