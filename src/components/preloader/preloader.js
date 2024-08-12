import gsap from 'gsap';

const preloader = () => {
  if (document.querySelector('.preloader')) {
    let preloader = document.querySelector('.preloader');
    let body = document.querySelector('body');
    body.classList.add('lock');

    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        body.classList.remove('lock');
      }, 2000);
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 3300);
      function counter(ms, className) {
        let counter = 0;
        let interval = setInterval(() => {
          document.querySelector(className).innerHTML = `${++counter} %`;
          counter === 100 ? clearInterval(interval) : false;
        }, ms);
      }
      counter(10, '.preloader-body__percents');

      gsap.to('.preloader-body__percents', { opacity: 1, duration: 2 });
      gsap.to('.preloader-body__logo', {
        opacity: 1,
        duration: 2,
        // delay: -1.5,
      });
      gsap.to('.preloader', {
        scale: 6,
        duration: 3,
        delay: 1.5,
      });
      gsap.to('.preloader', {
        opacity: 0,
        duration: 1.3,
        delay: 1.5,
      });
    });
  }
};

preloader();
