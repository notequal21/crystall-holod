if (document.querySelector('.catalog-body__side')) {
  const openBtn = document.querySelectorAll('.catalog-filter-open-btn');
  const closeBtn = document.querySelectorAll('.catalog-filter-close-btn');
  const category = document.querySelector('.catalog-body__side');

  const openCategory = () => {
    category.classList.add('_open');
  };
  const closeCategory = () => {
    category.classList.remove('_open');
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
