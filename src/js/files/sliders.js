/*
Документация слайдера: https://swiperjs.com/
*/

import Swiper from 'swiper';
import { A11y, Navigation, Pagination } from 'swiper/modules';
/*
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
*/

import '../../scss/base/swiper.scss';
// import "../../scss/libs/swiper.scss";
// import 'swiper/css';
export const createSlider = (el, options) => {
  let mergedOptions;
  const defaultOptions = {
    modules: [A11y],
    slidesPerView: 'auto',
    speed: 800,
    a11y: true,
  };

  if (options && typeof options === 'object') {
    mergedOptions = { ...defaultOptions, ...options };
    if (options.modules) {
      mergedOptions.modules = [
        ...new Set([...defaultOptions.modules, ...options.modules]),
      ];
    }
  }
  sliders.push([el, mergedOptions || defaultOptions]);
};

const sliders = [];
// Инициализация слайдеров
function initSliders() {
  // Список слайдеров
  // Проверяем, есть ли слайдер на странице
  console.log(sliders);
  sliders.forEach((element) => {
    new Swiper(element[0], element[1]);
  });
}

window.addEventListener('load', function (e) {
  createSlider('.stock-body__slider-item', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 16,
    navigation: {
      prevEl: '.stock-body__slider-nav._prev',
      nextEl: '.stock-body__slider-nav._next',
    },
  });
  createSlider('.range-slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
      prevEl: '.range-slider__nav._prev',
      nextEl: '.range-slider__nav._next',
    },
    breakpoints: {
      991: {
        slidesPerView: 'auto',
      },
    },
  });
  createSlider('.hits-slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      991: {
        slidesPerView: 5,
      },
    },
  });
  createSlider('.brands-slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 16,
    navigation: {
      prevEl: '.brands-slider__nav._prev',
      nextEl: '.brands-slider__nav._next',
    },
    breakpoints: {
      991: {
        spaceBetween: 24,
      },
    },
  });

  initSliders();
});

// Бинд слайдеров на window для беков
window.initSliders = initSliders;
