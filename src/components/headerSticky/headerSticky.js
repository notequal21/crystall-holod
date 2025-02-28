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
      if (document.querySelector('.catalog-body__side')) {
        const catalogSide = document.querySelector('.catalog-body__side');
        const defaultTop = catalogSide.style.top;

        console.log(catalogSide.style.top);

        if (prevScrollpos > currentScrollPos) {
          // catalogSide.add('_header-visible');
          catalogSide.style.top = `${header.offsetHeight + 16}px`;
          catalogSide.style.maxHeight = `calc(100vh - 16px - 24px - ${header.offsetHeight}px)`;
        } else {
          catalogSide.style.top = `16px`;
          catalogSide.style.maxHeight = `calc(100vh - 16px - 24px)`;
          // catalogSide.remove('_header-visible');
        }
      }
      if (document.querySelector('.cart-summary')) {
        const cartSummary = document.querySelector('.cart-summary');
        const defaultTop = cartSummary.style.top;

        if (prevScrollpos > currentScrollPos) {
          // catalogSide.add('_header-visible');
          cartSummary.style.top = `${header.offsetHeight + 16}px`;
          cartSummary.style.maxHeight = `calc(100vh - 16px - 24px - ${header.offsetHeight}px)`;
        } else {
          cartSummary.style.top = `16px`;
          cartSummary.style.maxHeight = `calc(100vh - 16px - 24px)`;
          // catalogSide.remove('_header-visible');
        }
      }
      if (document.querySelector('.info-body__side')) {
        const infoSide = document.querySelector('.info-body__side');
        const defaultTop = infoSide.style.top;

        if (prevScrollpos > currentScrollPos) {
          // catalogSide.add('_header-visible');
          infoSide.style.top = `${header.offsetHeight + 16}px`;
          infoSide.style.maxHeight = `calc(100vh - 16px - 24px - ${header.offsetHeight}px)`;
        } else {
          infoSide.style.top = `16px`;
          infoSide.style.maxHeight = `calc(100vh - 16px - 24px)`;
          // catalogSide.remove('_header-visible');
        }
      }
      prevScrollpos = currentScrollPos;
    };
    window.addEventListener('scroll', handleSticky);
  }, 400);
}
