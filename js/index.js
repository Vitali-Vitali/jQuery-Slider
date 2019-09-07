jQuery(document).ready(function ($) {

    var timer = setInterval(function () {
        moveRight();
    }, 5000);

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('.controlNext').click(function(){
        moveRight();
        clearInterval(timer);
        timer = setInterval(function () {
            moveRight();
        }, 5000);
    });
    $('.controlPrev').click(function(){
        moveLeft();
        clearInterval(timer);
        timer = setInterval(function () {
            moveRight();
        }, 5000);
    });

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 600, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 600, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

});