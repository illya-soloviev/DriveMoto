var popupCall = $('[data-popup]');
var popupClose = $('[data-close]');

popupCall.on('click', function(event) {
    event.preventDefault();

    var $this = $(this);

    var popupId = $this.data('popup');

    if( $this.is('[data-popup="#basket"]') ) {
        addDataProductInPopup($this);

        changeProductStatus($this); // Добавляем товар в корзину
    }

    $(popupId).addClass('show');
    $('body').addClass('no-scroll');

    setTimeout(function() {
        $(popupId).find('.popup__dialog').css({
            transform: "scale(1)"
        });
    }, 200);
});


popupClose.on('click', function(event) {
    event.preventDefault();

    var popupParent = $(this).parents('.popup');

    popupParent.find('.popup__dialog').css({
        transform: "scale(0)"
    });

    setTimeout(function() {
        popupParent.removeClass('show');
        $('body').removeClass('no-scroll');
    }, 200);
});

$('.popup').on('click', function() {
    var $this = $(this);

    $this.find('.popup__dialog').css({
        transform: "scale(0)"
    });

    setTimeout(function() {
        $this.removeClass('show');
        $('body').removeClass('no-scroll');
    }, 200);
});

$('.popup__dialog').on('click', function(event) {
    event.stopPropagation();
});