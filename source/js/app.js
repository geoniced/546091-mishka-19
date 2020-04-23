var menuButton = document.querySelector('.main-nav__menu');
var mainNav = document.querySelector('.main-nav');

mainNav.classList.remove('main-nav--no-js');

menuButton.addEventListener('click', function(evt) {
  if (mainNav.classList.contains('main-nav--opened')) {
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
  } else {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  }
});
