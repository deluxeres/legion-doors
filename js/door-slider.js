(function() {
    $(document).ready(function() {
        $('#slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: $('.slider__arrow-right'),
            prevArrow: $('.slider__arrow-left')
        })
        if (window.matchMedia("(max-width: 767px)").matches) { 
            $('#fire-slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: $('.slider__arrow-right'),
                prevArrow: $('.slider__arrow-left')
            })
        }
    })
})()




