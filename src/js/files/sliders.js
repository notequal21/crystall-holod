/*
Документация слайдера: https://swiperjs.com/
*/

import Swiper from 'swiper';
import {
  A11y,
  Navigation,
  Pagination,
  Thumbs,
  Mousewheel,
} from 'swiper/modules';
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
export function initSliders() {
  // Список слайдеров
  // Проверяем, есть ли слайдер на странице
  console.log(sliders);
  sliders.forEach((element) => {
    new Swiper(element[0], element[1]);
  });
}

window.addEventListener('load', function (e) {
  if (document.querySelector('.detail-main__slider-thumb')) {
    const button3d = document.querySelector('.js-3d-button');
    const catalogItemSliderMin = new Swiper('.detail-main__slider-thumb', {
      modules: [Pagination, Thumbs, Mousewheel],
      slidesPerView: document
        .querySelector('.detail-main__slider-thumb')
        ?.classList.contains('_3d')
        ? 3
        : 4,
      watchSlidesProgress: true,
      spaceBetween: 19,
      direction: 'horizontal',
      mousewheel: true,
      breakpoints: {
        767: {
          spaceBetween: 24,
        },
        1441: {
          spaceBetween: 24,
          direction: 'vertical',
        },
      },
    });
    const catalogItemSliderMain = new Swiper('.detail-main__slider-big', {
      modules: [Pagination, Thumbs, Navigation],
      slidesPerView: 1,
      thumbs: {
        swiper: catalogItemSliderMin,
      },
      pagination: {
        el: '._slider_pagination',
        clickable: true,
      },
      navigation: {
        prevEl: '._slider_nav._prev',
        nextEl: '._slider_nav._next',
      },
    });
    button3d?.addEventListener('click', () => {
      catalogItemSliderMain.slideTo(button3d.dataset.slideIndex);
    });
  }
  // const catalogItemSliderMin = new Swiper('.detail-main__slider-thumb', {
  //   modules: [Pagination, Thumbs, Mousewheel],
  //   slidesPerView: 3,
  //   watchSlidesProgress: true,
  //   spaceBetween: 19,
  //   direction: 'horizontal',
  //   mousewheel: true,
  //   breakpoints: {
  //     767: {
  //       spaceBetween: 24,
  //     },
  //     1441: {
  //       spaceBetween: 24,
  //       direction: 'vertical',
  //     },
  //   },
  // });
  // const catalogItemSliderMain = new Swiper('.detail-main__slider-big', {
  //   modules: [Pagination, Thumbs, Navigation],
  //   slidesPerView: 1,
  //   thumbs: {
  //     swiper: catalogItemSliderMin,
  //   },
  //   pagination: {
  //     el: '._slider_pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     prevEl: '._slider_nav._prev',
  //     nextEl: '._slider_nav._next',
  //   },
  // });
  // createSlider('.detail-main__slider-big', {
  //   modules: [Pagination, Thumbs, Navigation],
  //   slidesPerView: 1,
  //   thumbs: {
  //     swiper: catalogItemSliderMin,
  //   },
  //   pagination: {
  //     el: '._slider_pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     prevEl: '._slider_nav._prev',
  //     nextEl: '._slider_nav._next',
  //   },
  // });
  createSlider('._slider', {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    pagination: {
      el: '._slider__pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '._slider__nav._prev',
      nextEl: '._slider__nav._next',
    },
  });
  createSlider('.fast_view-body__slider', {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    pagination: {
      el: '._slider_pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '._slider_nav._prev',
      nextEl: '._slider_nav._next',
    },
  });
  const companySliderList = document.querySelectorAll('._company-slider');
  companySliderList.forEach((item) => {
    createSlider(item.querySelector('._company-slider__content'), {
      modules: [Navigation],
      slidesPerView: 'auto',
      spaceBetween: 12,
      navigation: {
        prevEl: '._company-slider__nav._prev',
        nextEl: '._company-slider__nav._next',
      },
    });
  });
  const examplesSliderList = document.querySelectorAll('._examples-slider');
  examplesSliderList.forEach((item) => {
    createSlider(item.querySelector('._examples-slider__item'), {
      modules: [Navigation],
      slidesPerView: 'auto',
      spaceBetween: 12,
      navigation: {
        prevEl: '._examples-slider__nav._prev',
        nextEl: '._examples-slider__nav._next',
      },
    });
  });
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
