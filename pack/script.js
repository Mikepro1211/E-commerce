// JavaScript para ocultar/mostrar la barra de navegación en función del scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".header").style.top = "0";
    } else {
        document.querySelector(".header").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}
