const scrolltTopButton = document.querySelector('.top-link');
scrolltTopButton.addEventListener('click', () => {
    backToTop();
});
function backToTop(){
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
    }
}

const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.slide-button-next',
        prevEl: '.slide-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
