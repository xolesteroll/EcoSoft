
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
        $(this).text('CHOOSE LIFE!!!');
        $(this).css({'background-image': 'url(images/gifs/woods.gif)', 'background-color': 'transparent'});
    });
    $('.choose__red').on('mouseleave', function() {
        $(this).text('Choose Green!!!');
        $(this).css({'background-image': 'none', 'background-color': 'rgba(65,154,28,0.5)'});
    });
    $('.choose__blue').on('mouseenter', function() {
        $('.choose__blue').text('CHOOSE SKY!!!');
        $(this).css({'background-image': 'url(images/gifs/sky.gif)', 'background-color': 'transparent'});

    });
    $('.choose__blue').on('mouseleave', function() {
        $('.choose__blue').text('Choose Blue!!!');
        $(this).css({'background-image': 'none', 'background-color': 'rgba(23,97,160,0.5)'});
    });

    $('.profiles__item-connect.offline').text('OFFLINE');

    

    new WOW().init();
    
});






