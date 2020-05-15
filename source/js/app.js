var menuButton = document.querySelector('.main-nav__menu');
var mainNav = document.querySelector('.main-nav');
var orderButtons = document.querySelectorAll('.js-order');
var orderModal = document.querySelector('.modal-order');

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

for (var i = 0; i < orderButtons.length; i++) {
  var orderButton = orderButtons[i];

  orderButton.addEventListener('click', orderButtonHandler);
}

function modalCloseHandler(evt) {
  var blocklayer = document.querySelector('.blocklayer');
  orderModal.classList.remove('modal--open');
  orderModal.classList.add('modal--closed');

  document.body.removeChild(blocklayer);
};

function orderButtonHandler(evt) {
  evt.preventDefault();

  var addToCartButton = orderModal.querySelector('.modal-order__add');

  var blocklayer = document.createElement('div');
  blocklayer.classList.add('blocklayer');

  blocklayer.addEventListener('click', modalCloseHandler);
  window.addEventListener('keydown', keydownHandler);
  addToCartButton.addEventListener('click', modalCloseHandler);

  document.body.appendChild(blocklayer);

  orderModal.classList.remove('modal--closed');
  orderModal.classList.add('modal--open');
};

function keydownHandler(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modalCloseHandler();

    window.removeEventListener('keydown', keydownHandler);
  }
};
