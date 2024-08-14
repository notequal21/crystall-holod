export const initNotify = (type, duration = 2500) => {
  if (document.querySelector('.notification')) {
    const notify = document.querySelector(
      `.notification-list .notification-item.${type}`
    );

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
  initNotify('_success');
  // initNotify('_info');
  // setTimeout(() => {
  //   initNotify('_error');
  // }, 500);
  // setTimeout(() => {
  //   initNotify('_success');
  // }, 1000);
}, 1000);
