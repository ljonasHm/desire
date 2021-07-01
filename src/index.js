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

function blogSlider() {
    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slide-right.svg" alt="arrow right"></button>'
    })
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

function burgerMenu() {
    const menus = document.querySelectorAll('.menu');
    const menuButton = document.querySelector('.header__btn-menu');

    menuButton.addEventListener('click', () => {
        menus.forEach(menu => {
            menu.classList.toggle('menu--open');
        })
    });
}

rightsideMenu();
topSlider();
blogSlider();
contactSlider();
gallery();
burgerMenu();