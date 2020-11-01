function changeProductStatus($this) {
    if( $this.is('[data-add-in-basket]') && $this.parents('.product-item')) {
        var productItem = $this.parents('.product-item');
        $(productItem).addClass('added-in-basket');
    }
    else if( $this.is('[data-delete-from-basket]') ) {
        var productIdValue = $this.parents('[data-product-id]').attr('data-product-id');
        
        if( !$this.is('[data-basket-on-product-page]') ) {
            var productItem = $('[data-id="'+ productIdValue +'"]');
            productItem.removeClass('added-in-basket');
        } 
    }
}

$('.basket-product__delete-btn').on('click', function(event) {
    event.preventDefault();

    var $this = $(this);
    changeProductStatus($this);
});