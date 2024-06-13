if (document.querySelector('.catalog-body__side-accord')) {
  const catalogAccordList = document.querySelectorAll(
    '.catalog-body__side-accord'
  );

  catalogAccordList.forEach((item) => {
    const top = item.querySelector('._top');
    const content = item.querySelector('._top__content');

    top.addEventListener('click', () => {
      if (item.classList.contains('_open')) {
        item.classList.remove('_open');
      } else {
        item.classList.add('_open');
      }
    });
  });
}
