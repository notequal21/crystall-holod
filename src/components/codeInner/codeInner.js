export const codeInputInit = () => {
  if (document.querySelector('._code')) {
    const code = document.querySelector('._code');
    const codeInputs = code.querySelectorAll('._code-item');
    const input = code.querySelector('input');

    input.addEventListener('input', (e) => {
      const innerText = e.target.value.split('');
      codeInputs[0].innerHTML = innerText[0] ? innerText[0] : '_';
      codeInputs[1].innerHTML = innerText[1] ? innerText[1] : '_';
      codeInputs[2].innerHTML = innerText[2] ? innerText[2] : '_';
      codeInputs[3].innerHTML = innerText[3] ? innerText[3] : '_';
    });
  }
};
