if (document.querySelector('.upBtn')) {
  const btn = document.querySelector('.upBtn');
  const sticky = 500;

  function handleSticky() {
    if (window.pageYOffset > sticky) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleSticky);
}
