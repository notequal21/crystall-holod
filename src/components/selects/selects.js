import Choices from 'choices.js';

export const initSelects = () => {
  if (document.querySelector('._select')) {
    const headerSelectList = document.querySelectorAll('._select');

    headerSelectList.forEach((item) => {
      const choices = new Choices(item, {
        itemSelectText: '',
        searchEnabled: false,
      });
    });
  }
};
initSelects();
