let menu = document.querySelector('#hamburger-icon')
let mobile = document.querySelector('.mobile-menu')
let hero = document.querySelector('.hero')
let cover = document.querySelector('.cover')
const myPreloader = document.querySelector('.preloader');

const fadeOutEffect = setInterval(() => {
  myPreloader.style.display = 'none'
}, 8000);

menu.addEventListener('click', function () {
  menu.classList.toggle('open');
  mobile.style.top = '0%'
})

window.addEventListener('scroll', () => {
 console.log(window.scrollY)//
  if (window.scrollY >= 1460) {
    hero.classList.remove('init-scroll')
    hero.classList.add('second-scroll')
  } else if (window.scrollY >= 1180) {
    cover.classList.remove('mobile-cover2')
    cover.classList.add('mobile-cover')
  }
  else if (window.scrollY >= 640) {
    hero.classList.remove('second-scroll')
    hero.classList.add('init-scroll')
  } else if (window.scrollY >= 610) {
    cover.classList.remove('mobile-cover')
    cover.classList.add('mobile-cover2')
  } //else if (window.scrollY < 930 && window.scrollY > 360 ) {
 //   cover.classList.remove('mobile-cover')
 //   cover.classList.add('mobile-cover2')
 // } 
  else {
    cover.classList.add('mobile-cover')
    cover.classList.remove('mobile-cover2')
    hero.classList.remove('init-scroll')
    hero.classList.add('second-scroll')
  }
})

// window.addEventListener('load', fadeOutEffect);
