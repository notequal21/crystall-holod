if (document.querySelector('._delivery-top__input')) {
  const block = document.querySelector('._delivery-top__input');
  const input = block.querySelector('.input');
  const dropdown = block.querySelector('._dropdown');
  const dropdownItem = dropdown.querySelectorAll('li');

  input.addEventListener('input', (e) => {
    if (e.target.value.length > 2) {
      block.classList.add('_active');
    } else {
      block.classList.remove('_active');
    }
  });

  dropdownItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      input.value = e.target.textContent.trim();
      block.classList.remove('_active');
    });
  });

  block.addEventListener('mouseleave', () => {
    block.classList.remove('_active');
  });
}
