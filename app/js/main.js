
$(function () {
    $('.slider__inner').slick({
        dots: true,
        fade: true,
        autoplay: true
    });


    $('.slick-next').text('>');
    $('.slick-prev').text('<');

    $('.slick-next').on('mouseenter', function() {
        $(this).text('');
        $('.slider .slick-initialized .slick-slide').css('border-right-color', '#1761A0');
    });
    $('.slick-prev').on('mouseenter', function() {
        $(this).text('');
        $('.slider .slick-initialized .slick-slide').css('border-left-color', '#1761A0');

    });
    $('.slick-next').on('mouseleave', function() {
        $(this).text('>');
        $('.slider .slick-initialized .slick-slide').css('border-right', '');
    });
    $('.slick-prev').on('mouseleave', function() {
        $(this).text('<');
        $('.slider .slick-initialized .slick-slide').css('border-left', '');
    });



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

    $('.profiles__item-connect.offline').text('OFFLINE');

    new WOW().init();
    
});



