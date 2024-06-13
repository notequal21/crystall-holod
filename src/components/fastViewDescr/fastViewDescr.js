export const initFastViewDescr = () => {
  if (document.querySelector('.fast_view-descr')) {
    const description = document.querySelector('.fast_view-descr');
    const top = description.querySelector('.fast_view-descr__top');
    const content = description.querySelector('.fast_view-descr__content');

    top.addEventListener('click', () => {
      if (description.classList.contains('_open')) {
        description.classList.remove('_open');
        content.style.height = 0;
      } else {
        description.classList.add('_open');
        content.style.height = `${content.scrollHeight + 32}px`;
      }
    });
  }
};
