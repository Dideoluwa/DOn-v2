let menu = document.querySelector('#hamburger-icon')
let mobile = document.querySelector('.mobile-menu')
const myPreloader = document.querySelector('.preloader');

const fadeOutEffect = setInterval(() => {
    myPreloader.style.display = 'none'
  }, 8000);

menu.addEventListener('click' , function(){
  menu.classList.toggle('open');
  mobile.style.top = '0%'
})

// window.addEventListener('load', fadeOutEffect);
