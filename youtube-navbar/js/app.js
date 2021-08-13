const btnButton = document.getElementById('btn-button');
const navList = document.getElementById('nav-list');
const toggler = document.getElementById('toggler');
btnButton.addEventListener('click', () => {
  navList.classList.toggle('active');
  toggler.classList.toggle('active');
});
