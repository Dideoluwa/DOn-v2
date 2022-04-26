const myPreloader = document.querySelector('.preloader');

const fadeOutEffect = setInterval(() => {
    myPreloader.style.display = 'none'
  }, 8000);

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// window.addEventListener('load', fadeOutEffect);
