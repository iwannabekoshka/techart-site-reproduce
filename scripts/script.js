// Burger Menu
const burgerButton = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const html = document.querySelector('html');

burgerButton.addEventListener('click', function() {
    if ( !headerMenu.classList.contains('active') ) {
        headerMenu.classList.add('active');
        burgerButton.classList.add('active');

        html.classList.add('no-scroll');
    } else {
        headerMenu.classList.remove('active');
        burgerButton.classList.remove('active');

        html.classList.remove('no-scroll');
    }
});

// Window Scroll
const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo img');
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        burgerButton.classList.add('scrolled');
        headerLogo.src = "assets/images/logo.png";
    } else {
        header.classList.remove('scrolled');
        burgerButton.classList.remove('scrolled');
        headerLogo.src = "assets/images/logo-white.png";
    }
});