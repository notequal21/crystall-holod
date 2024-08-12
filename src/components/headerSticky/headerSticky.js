if (document.querySelector('.header')) {
  const page = document.querySelector('.page');
  const header = document.querySelector('.header');
  const sticky = header.offsetHeight;
  let prevScrollpos = window.pageYOffset;

  function handleSticky() {
    if (window.pageYOffset > sticky) {
      header.classList.add('_scrolled');
    } else {
      header.classList.remove('_scrolled');
    }
  }

  window.addEventListener('load', () => {
    setTimeout(() => {
      page.style.padding = `${header.offsetHeight}px  0 0`;
    }, 200);
  });

  setTimeout(() => {
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        header.classList.add('_visible');
      } else {
        header.classList.remove('_visible');
      }
      prevScrollpos = currentScrollPos;
    };
    window.addEventListener('scroll', handleSticky);
  }, 400);
}
