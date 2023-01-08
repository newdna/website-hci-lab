$(function() {
    const item = document.querySelector(".show-hide");
    $('.drop-item').toggle();
    $('.item-header').click(function() {
        $(this).next().toggle(500);
    });
})