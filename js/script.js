let menu = $('.nav__catalog-obvertka');
$('.catalog__btn').on("click", function() {
    menu.toggleClass('.nav__catalog-obvertka-active');
});
$('.banner__content').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
});
$('.xit__cards').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
});