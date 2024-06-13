export const showPass = () => {
  if (document.querySelector('._label._input_pass')) {
    const label = document.querySelector('._label._input_pass');
    const input = label.querySelector('input');
    const btn = label.querySelector('._input_pass__btn');

    btn.addEventListener('click', () => {
      if (label.classList.contains('_show')) {
        label.classList.remove('_show');
        input.type = 'password';
      } else {
        label.classList.add('_show');
        input.type = 'text';
      }
    });
  }
};
showPass();
