import './scss/style.scss';
import $ from 'jquery';
import mixitup from 'mixitup';
import 'slick-carousel';
import { Fancybox } from "@fancyapps/ui";

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

function contactSlider() {
    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false
    });
}

function gallery() {
    if (document.querySelector('.gallery__inner')) {
        var mixer = mixitup('.gallery__inner', {
            load: {
                filter: '.living'
            }
        });
    }
}

rightsideMenu();
topSlider();
contactSlider();
gallery();