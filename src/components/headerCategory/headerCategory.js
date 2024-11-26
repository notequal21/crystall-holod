if (document.querySelector('.category')) {
  const openBtn = document.querySelectorAll('.category-open-btn');
  const closeBtn = document.querySelectorAll('.category-close-btn');
  const category = document.querySelector('.category');
  const header = document.querySelector('.header');
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

    if (window.innerWidth <= 767) {
      header.classList.remove('_scrolled');
      category.classList.remove('_hidden');

      setTimeout(() => {
        category.classList.add('_open');
      }, 300);
    } else {
      category.classList.add('_open');
    }

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
      setTimeout(() => {
        category.classList.add('_hidden');
      }, 300);
    }

    if (window.innerWidth <= 767) {
      document.body.classList.remove('lock');
    }

    // header.classList.remove('_category-open');
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
