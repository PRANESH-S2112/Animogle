// router.js
function loadPage(page) {
  const main = document.getElementById('main');
  main.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = page;
  }, 400);
}