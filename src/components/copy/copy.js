function isHidden(element) {
  const elementRect = element.getBoundingClientRect();
  const elementHidesUp = elementRect.top < 0;
  const elementHidesLeft = elementRect.left < 0;
  const elementHidesDown = elementRect.bottom > window.innerHeight;
  const elementHidesRight = elementRect.right > window.innerWidth;
  const elementHides =
    elementHidesUp || elementHidesLeft || elementHidesDown || elementHidesRight;
  return elementHides;
}
function countHidden(element) {
  const elementRect = element.getBoundingClientRect();
  const elementHides = {
    up: Math.max(0, 0 - elementRect.top),
    left: Math.max(0, 0 - elementRect.left),
    down: Math.max(0, elementRect.bottom - window.innerHeight),
    right: Math.max(0, elementRect.right - window.innerWidth),
  };
  return elementHides;
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement('textarea');
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log('Async: Copying to clipboard was successful!');
    },
    function (err) {
      console.error('Async: Could not copy text: ', err);
    }
  );
}

if (document.querySelector('.catalog_item-content__art')) {
  const vendorCode = document.querySelectorAll('.catalog_item-content__art');

  vendorCode.forEach((item) => {
    const btn = item.querySelector('button');
    const code = item.querySelector('span');
    const copied = item.querySelector('._copied');

    item.addEventListener('click', () => {
      copyTextToClipboard(code.innerText);
      copied && copied.classList.add('_open');

      if (isHidden(copied)) {
        copied && copied.classList.add('_left');
      } else {
        copied && copied.classList.remove('_left');
      }

      setTimeout(() => {
        copied && copied.classList.remove('_open');
      }, 3000);
    });
  });
}
if (document.querySelector('.copy_item')) {
  const vendorCode = document.querySelectorAll('.copy_item');

  vendorCode.forEach((item) => {
    const btn = item.querySelector('button');
    const code = item.querySelector('.copy_item__text');
    const copied = item.querySelector('._copied');

    item.addEventListener('click', () => {
      copyTextToClipboard(code.innerText);

      copied && copied.classList.add('_open');

      if (isHidden(copied)) {
        copied && copied.classList.add('_left');
      } else {
        copied && copied.classList.remove('_left');
      }

      setTimeout(() => {
        copied && copied.classList.remove('_open');
      }, 3000);
    });
  });
}
