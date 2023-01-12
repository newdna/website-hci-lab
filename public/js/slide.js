$(function() {
    $('.slide-img').hide();

    let min = 0;
    let max = $('.slide-img').length - 1;
    let current = min;

    $('.slide-img').eq(current).show();

    $('#left').click(() => {
        $('.slide-img').eq(current).fadeOut(100);
        current = (current == min) ? max : current - 1; 
        $('.slide-img').eq(current).fadeIn(100);
    })

    $('#right').click(() => {
        $('.slide-img').eq(current).fadeOut(100);
        current = (current == max) ? min : current + 1;
        $('.slide-img').eq(current).fadeIn(100);
    })
})