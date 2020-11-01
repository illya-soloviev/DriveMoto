// Изменение суммы итоговой стоимости
function changeTotalSum(counterValue) {
    var productPrice = $('.basket-product__main').find('.basket-product__price').html();
    var replaceProductPrice = productPrice.replace(/\s+/g,'');
    var productPriceVal = parseInt(replaceProductPrice);

    var totalPriceContainer = $('.basket-product__main').find('.basket-product__total span');
    var totalPriceProduct = productPriceVal * counterValue;

    totalPriceProduct = totalPriceProduct.toLocaleString(); // Добавляем пробелы в сумму
    totalPriceContainer.html(totalPriceProduct + ' ' + '₽');
}




$('.basket-product__main').on('click', '[data-action="plus"]', function(event) {
    event.preventDefault();

    var counter = $('.basket-product__main').find('.basket-product__counter-num');
    var counterValue = counter.html();

    counterValue = ++counterValue;
    counter.html(counterValue);

    changeTotalSum(counterValue);
});

$('.basket-product__main').on('click', '[data-action="minus"]', function(event) {
    event.preventDefault();

    var counter = $('.basket-product__main').find('.basket-product__counter-num');
    var counterValue = counter.html();

    if( counterValue > 1 ) {
        counterValue = --counterValue;
        counter.html(counterValue);

        changeTotalSum(counterValue);
    }
});
