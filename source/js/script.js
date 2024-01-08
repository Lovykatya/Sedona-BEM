let navMain = document.querySelector('.main_navigation');
let navToggle = document.querySelector('.main-navigation__toggle');

navMain.classList.remove('main_navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main_navigation__close')) {
    navMain.classList.remove('main_navigation__close');
    navMain.classList.add('main_navigation__open');
  } else {
    navMain.classList.add('main_navigation__close');
    navMain.classList.remove('main_navigation__open');
  }
});
