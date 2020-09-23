
$(function () {
    $('.slider__inner').slick({
        dots: true,
        fade: true,
        autoplay: true
    });
    $('.slick-next').text('');
    $('.slick-prev').text('');

    $('.choose__red').on('mouseenter', function() {
        $('.choose__red').text('REEEEEEED');
    });
    $('.choose__red').on('mouseleave', function() {
        $('.choose__red').text('Choose Red!!!');
    });
    $('.choose__blue').on('mouseenter', function() {
        $('.choose__blue').text('BLUUUUUUE');
    });
    $('.choose__blue').on('mouseleave', function() {
        $('.choose__blue').text('Choose Blue!!!');
    });
});