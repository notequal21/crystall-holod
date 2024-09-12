export const initNotify = (type, text, duration = 2500) => {
  if (document.querySelector('.notification')) {
    // const notify = document.querySelector(
    //   `.notification-list .notification-item.${type}`
    // );

    // notify.classList.add('_active');
    // setTimeout(() => {
    //   notify.classList.add('_visible');
    // }, 1);
    // setTimeout(() => {
    //   notify.classList.add('_clear');
    // }, duration);
    // setTimeout(() => {
    //   notify.classList.remove('_clear');
    //   notify.classList.remove('_visible');
    //   notify.classList.remove('_active');
    // }, duration + 300);
    const notifyList = document.querySelector(`.notification-list`);
    let notify = document.createElement('div');
    notify.classList.add(
      'notification-item',
      '_success',
      'text',
      'text_12',
      'text_secondary'
    );
    notify.innerHTML = text;

    switch (type) {
      case '_success':
        break;

      default:
        break;
    }

    notifyList.appendChild(notify);
    notify.classList.add('_active');
    setTimeout(() => {
      notify.classList.add('_visible');
    }, 1);
    setTimeout(() => {
      notify.classList.add('_clear');
    }, duration);
    setTimeout(() => {
      notify.classList.remove('_clear');
      notify.classList.remove('_visible');
      notify.classList.remove('_active');
    }, duration + 300);
  }
};

setTimeout(() => {
  initNotify(
    '_success',
    'Товар «Название товара в несколько сим...» добавлен к корзину в количестве 1 шт'
  );
  initNotify(
    '_success',
    'Товар «Название товара в несколько сим...» добавлен к корзину в количестве 1 шт'
  );
  initNotify(
    '_success',
    'Товар «Название товара в несколько сим...» добавлен к корзину в количестве 1 шт'
  );
  // initNotify('_info');
  // setTimeout(() => {
  //   initNotify('_error');
  // }, 500);
  // setTimeout(() => {
  //   initNotify('_success');
  // }, 1000);
}, 1000);
