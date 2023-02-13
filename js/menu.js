let header__burger = document.querySelectorAll('[data-header__burger]');
let header_menu = document.querySelector('[data-header_menu]');
let back = document.querySelector('body');
let backdrop = document.querySelector('[data-backdrop]');

header__burger.forEach(function (item) {
  item.onclick = function () {
    item.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
    backdrop.classList.toggle('active');
  };
});
