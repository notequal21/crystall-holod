if (document.querySelector('.lk_orders-item')) {
  const itemList = document.querySelectorAll('.lk_orders-item');

  itemList.forEach((item) => {
    const btn =
      window.innerWidth > 767
        ? item.querySelector('.lk_orders-item__top')
        : item.querySelector('.lk_orders-item__btn');
    const content = item.querySelector('.lk_orders-item__content');

    btn.addEventListener('click', () => {
      if (item.classList.contains('_open')) {
        item.classList.remove('_open');
        content.style.height = 0;
      } else {
        item.classList.add('_open');
        content.style.height = `${content.scrollHeight}px`;
      }
    });
  });
}
