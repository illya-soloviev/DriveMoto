function tabs($this) {
    $this.siblings().removeClass('tabs__nav-item--active');
    $this.parents('.tabs__nav').siblings().find('.tabs__content-item').removeClass('tabs__content-item--active');

    $this.addClass('tabs__nav-item--active');
    $($this.attr('href')).addClass('tabs__content-item--active');
}

$('.tabs__nav-item').on('click', function(event) {
    event.preventDefault();

    var $this = $(this);
    tabs($this);
});