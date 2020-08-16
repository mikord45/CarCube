$(document).foundation();

$(document).ready(function () {
    $('.mySlider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img class="mySliderArrow" src="./public/images/back.png" /></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="mySliderArrow" src="./public/images/next.png" /></button>'
    });
    $('.mySliderSmall4').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prevSmall"><img class="mySliderArrow" src="./public/images/back.png" /></button>',
        nextArrow: '<button type="button" class="slick-nextSmall"><img class="mySliderArrow" src="./public/images/next.png" /></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    })
});