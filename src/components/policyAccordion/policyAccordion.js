if (document.querySelector('.policy-item')) {
  const policyItemList = document.querySelectorAll('.policy-item');

  policyItemList.forEach((item) => {
    const top = item.querySelector('.policy-item__top');
    const content = item.querySelector('.policy-item__content');

    top.addEventListener('click', () => {
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
