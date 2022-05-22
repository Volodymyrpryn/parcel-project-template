const burgerMenu = document.querySelector('.navigation__burger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu__close');

const handleOpen = () => {
  console.log('ok');
  menu.style.display = 'block';
};
const handleClose = () => {
  menu.style.display = 'none';
};

burgerMenu.addEventListener('click', handleOpen);
closeMenu.addEventListener('click', handleClose);
