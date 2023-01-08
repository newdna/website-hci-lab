$(function() {
    const menu = document.querySelector("#hamburger");
    // $('#nav-resp').toggle();
    menu.addEventListener("click", () => {
        $('#nav-resp').toggle(500);
    }); 
})