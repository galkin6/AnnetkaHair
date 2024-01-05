const menu = document.querySelector('.header__nav ');
const btnWrapper = document.querySelector('.btnWrapper');
const btnBody = document.querySelector('.btnBody');

btnWrapper.onclick = function(){
  btnBody.classList.toggle('btnBody-active');
  menu.classList.toggle('header__nav--active');
};
