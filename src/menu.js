const burgerMenu = document.querySelector('.navigation__burger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu__close');
const btnNav = document.querySelector('.btn--nav');
// const btnNavMobile = document.querySelector('.btn--nav');

const handleOpen = () => {
  console.log('ok');
  menu.style.display = 'block';
  btnNav.style.display = 'none';
};
const handleClose = () => {
  menu.style.display = 'none';
  if (viewportWidth > 768) {
    btnNav.style.display = 'block';
  }

  btnNav.style.display = 'block';
};

burgerMenu.addEventListener('click', handleOpen);
closeMenu.addEventListener('click', handleClose);
