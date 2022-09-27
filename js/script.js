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
$('.action__cards').slick({
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [{
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
})
$('.xit__cards').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});