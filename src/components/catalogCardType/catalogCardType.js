if (document.querySelector('._catalog_card')) {
  const catalog = document.querySelector('._catalog_card');
  const catalogCardType = catalog.querySelectorAll('._type input');
  const catalogContent = catalog.querySelector('._catalog_card_list');

  catalogCardType.forEach((item, index) => {
    item.addEventListener('change', () => {
      if (item.dataset.cardType === 'row') {
        catalogContent.classList.add('_horizontal');
      } else {
        catalogContent.classList.remove('_horizontal');
      }
    });
  });
}
