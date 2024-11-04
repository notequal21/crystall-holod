if (document.querySelector('.mobile_menu')) {
  const menu = document.querySelector('.mobile_menu');
  const openBtn = document.querySelectorAll('._mobile-menu-open-btn');
  const closeBtn = document.querySelectorAll('._mobile-menu-close-btn');

  openBtn.forEach((item) => {
    item.addEventListener('click', () => {
      menu.classList.add('open');
      document.body.classList.add('lock');
    });
  });
  closeBtn.forEach((item) => {
    item.addEventListener('click', () => {
      menu.classList.remove('open');
      document.body.classList.remove('lock');
    });
  });
}
