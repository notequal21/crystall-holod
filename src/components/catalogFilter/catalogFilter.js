if (document.querySelector('.catalog-body__side')) {
  const openBtn = document.querySelectorAll('.catalog-filter-open-btn');
  const closeBtn = document.querySelectorAll('.catalog-filter-close-btn');
  const category = document.querySelector('.catalog-body__side');
  const header = document.querySelector('.header');
  const body = document.body;

  const openCategory = () => {
    category.classList.add('_open');
    body.classList.add('lock');
    header.classList.add('_scrolled', '_visible');
  };
  const closeCategory = () => {
    category.classList.remove('_open');
    body.classList.remove('lock');
    header.classList.remove('_scrolled', '_visible');
  };

  openBtn.forEach((item) => {
    item.addEventListener('click', () => {
      if (category.classList.contains('_open')) {
        closeCategory();
      } else {
        openCategory();
      }
    });
  });
  closeBtn.forEach((item) => {
    item.addEventListener('click', () => {
      closeCategory();
    });
  });
}
