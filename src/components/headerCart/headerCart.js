if (document.querySelector('.header_cart')) {
  const openBtn = document.querySelectorAll('.header_cart-open-btn');
  const cart = document.querySelector('.header_cart');

  const openCart = () => {
    openBtn.forEach((item) => {
      item.classList.add('_open');
    });
    cart.classList.add('_open');
  };
  const closeCart = () => {
    openBtn.forEach((item) => {
      item.classList.remove('_open');
    });
    cart.classList.remove('_open');
  };

  openBtn.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      if (cart.classList.contains('_open')) {
        closeCart();
      } else {
        openCart();
      }
    });
  });

  cart.addEventListener('mouseleave', closeCart);
}
