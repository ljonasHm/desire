import './scss/style.scss';

function rightsideMenu() {
    const menu = document.querySelector('.rightside-menu');
    const menuButton = document.querySelector('.header__btn');
    const menuClose = document.querySelector('.rightside-menu__close');

    menuButton.addEventListener('click', () => {
        menu.classList.remove('rightside-menu--close');
    });
    menuClose.addEventListener('click', () => {
        menu.classList.add('rightside-menu--close');
    })
}

function topSlider() {
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });
}

function gallery() {
    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });
}

rightsideMenu();
topSlider();
gallery();