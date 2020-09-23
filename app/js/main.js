
$(function () {
    $('.slider__inner').slick({
        dots: true,
        fade: true,
        autoplay: true
    });
    $('.slick-next').text('>');
    $('.slick-prev').text('<');


    
    $('.choose__red').on('mouseenter', function() {
        $('.choose__red').text('CHOOSE LIFE!!!');
    });
    $('.choose__red').on('mouseleave', function() {
        $('.choose__red').text('Choose Green!!!');
    });
    $('.choose__blue').on('mouseenter', function() {
        $('.choose__blue').text('CHOOSE SKY!!!');
    });
    $('.choose__blue').on('mouseleave', function() {
        $('.choose__blue').text('Choose Blue!!!');
    });

    
new WOW().init();
    
});

