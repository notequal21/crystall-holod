if (document.querySelector('.category')) {
  const openBtn = document.querySelectorAll('.category-open-btn');
  const closeBtn = document.querySelectorAll('.category-close-btn');
  const category = document.querySelector('.category');
  const categoryMain = category.querySelector('.category-main');
  const categoryMainItemList = categoryMain.querySelectorAll(
    '.category-item._second'
  );
  const categorySecond = category.querySelector('.category-second');
  const categorySecondContentList = category.querySelectorAll(
    '.category-second__content'
  );

  const openCategory = () => {
    openBtn.forEach((item) => {
      item.classList.add('_open');
    });
    category.classList.add('_open');
    if (window.innerWidth <= 767) {
      document.body.classList.add('lock');
    }
  };
  const closeCategory = () => {
    openBtn.forEach((item) => {
      item.classList.remove('_open');
    });
    category.classList.remove('_open');
    if (window.innerWidth <= 767) {
      document.body.classList.remove('lock');
    }
    closeCategorySecond();
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

  category.addEventListener('mouseleave', closeCategory);

  const closeAllCategorySecondContent = () => {
    categorySecondContentList.forEach((item) => {
      item.classList.remove('_active');
    });
  };
  const openCategorySecond = (index) => {
    categorySecond.classList.add('_open');
    categorySecondContentList[index].classList.add('_active');
  };
  const closeCategorySecond = () => {
    categorySecond.classList.remove('_open');
    closeAllCategorySecondContent();
  };

  categoryMainItemList.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      closeAllCategorySecondContent();
      openCategorySecond(index);
    });
  });
}
