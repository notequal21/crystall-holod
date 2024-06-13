import noUiSlider from 'nouislider';

if (document.querySelector('._range-slider')) {
  const sliderList = document.querySelectorAll('._range-slider');

  sliderList.forEach((item) => {
    noUiSlider.create(item, {
      start: [6000, 25500],
      connect: true,
      range: {
        min: 1800,
        max: 35500,
      },
    });
  });
}
