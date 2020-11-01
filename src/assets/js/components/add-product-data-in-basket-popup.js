var basketPopup = $('#basket');
var basketPopupContainer = $('#basket').find('.basket-product__main');

function addDataProductInPopup($this) {
    if( $this.is('.product-card__btn') ) {
        var selectedProduct = $this.parents('.product-card');

        var selectedProductInfo = {
            id : selectedProduct.attr('data-id'),
            imgSrc : selectedProduct.find('.product-card__img').attr('src'),
            title : selectedProduct.find('.product-card__title').html(),
            price : selectedProduct.find('.product-card__price-new').html()
        }

        var basketPopupHTML = `<div class="basket-product__rating" data-rateyo-rating="4"></div><div class="basket-product__inner"><div class="basket-product__img-box"><a href="#"><img class="basket-product__img" src="${selectedProductInfo.imgSrc}" alt=""></a></div><div class="basket-product__content"><a class="basket-product__name" href="#">${selectedProductInfo.title}</a><div class="basket-product__price">${selectedProductInfo.price}/ шт</div><div class="basket-product__counter-wrap"><span class="basket-product__counter-text">Кол-во:</span><button class="basket-product__counter-control" type="button" data-action="minus">-</button><span class="basket-product__counter-num">1</span><button class="basket-product__counter-control" type="button" data-action="plus">+</button></div><div class="basket-product__total">Итого:<span>${selectedProductInfo.price}</span> </div></div></div>`;
        
        basketPopupContainer.html(basketPopupHTML);

        basketPopup.attr('data-product-id', selectedProductInfo.id);
    }
    else if( $this.parents('.product-item') ) {
        var selectedProduct = $this.parents('.product-item');

        var selectedProductInfo = {
            id : selectedProduct.attr('data-id'),
            imgSrc : selectedProduct.find('.product-item__img').attr('src'),
            title : selectedProduct.find('.product-item__title').html(),
            price : selectedProduct.find('.product-item__price').html()
        }

        var basketPopupHTML = `<div class="basket-product__rating" data-rateyo-rating="4"></div><div class="basket-product__inner"><div class="basket-product__img-box"><a href="#"><img class="basket-product__img" src="${selectedProductInfo.imgSrc}" alt=""></a></div><div class="basket-product__content"><a class="basket-product__name" href="#">${selectedProductInfo.title}</a><div class="basket-product__price">${selectedProductInfo.price}/ шт</div><div class="basket-product__counter-wrap"><span class="basket-product__counter-text">Кол-во:</span><button class="basket-product__counter-control" type="button" data-action="minus">-</button><span class="basket-product__counter-num">1</span><button class="basket-product__counter-control" type="button" data-action="plus">+</button></div><div class="basket-product__total">Итого:<span>${selectedProductInfo.price}</span> </div></div></div>`;
        
        basketPopupContainer.html(basketPopupHTML);

        basketPopup.attr('data-product-id', selectedProductInfo.id);
    }
}


