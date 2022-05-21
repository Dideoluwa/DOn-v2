// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger :".hero",
//     start: 'top',
//     end: '100% '
//   }
// })

// tl.fromTo('.hero' , {opacity: 0} , {opacity : 1})

// let tl1 = gsap.timeline({
//   scrollTrigger: {
//     trigger :".about",
//     start: '-20%',
//     end: '100% ',
//   }
// })
// tl1.fromTo('.about' , {opacity: 0} , {opacity : 1})

// let tl2 = gsap.timeline({
//   scrollTrigger: {
//     trigger :".about-txt2",
//     start: '-35%',
//     end: '100% ',
//   }
// })
// tl2.fromTo('.about-txt2' , {opacity: 0} , {opacity : 1})

// let tl3= gsap.timeline({
//   scrollTrigger: {
//     trigger :".port",
//     start: '-30%',
//     end: '100% ',
//     // markers: true
//   }
// })
// tl3.fromTo('.port' , {opacity: 0} , {opacity : 1})

// let tl4= gsap.timeline({
//   scrollTrigger: {
//     trigger :".first-port",
//     start: '-250%',
//     end: '100% ',
//     // markers: true
//   }
// })
// tl4.fromTo('.first-port' , {opacity: 0} , {opacity : 1})

// let tl5= gsap.timeline({
//   scrollTrigger: {
//     trigger :".second-port",
//     start: '-300%',
//     end: '100% ',
//     // markers: true
//   }
// })
// tl5.fromTo('.second-port' , {opacity: 0} , {opacity : 1})

// let tl6= gsap.timeline({
//   scrollTrigger: {
//     trigger :".third-port",
//     start: '-350%',
//     end: '100% ',
//     // markers: true
//   }
// })
// tl6.fromTo('.third-port' , {opacity: 0} , {opacity : 1})

// let tl7= gsap.timeline({
//   scrollTrigger: {
//     trigger :".fourth-port",
//     start: '-290%',
//     end: '100% ',
//     // markers: true
//   }
// })
// tl7.fromTo('.fourth-port' , {opacity: 0} , {opacity : 1})

// let tl8= gsap.timeline({
//   scrollTrigger: {
//     trigger :".fifth-port",
//     start: '-400%',
//     end: '100% ',
//     // markers: true
//   }
// })
// tl8.fromTo('.fifth-port' , {opacity: 0} , {opacity : 1})

// let tl9= gsap.timeline({
//   scrollTrigger: {
//     trigger :".sixth-port",
//     start: '-320%',
//     end: '100% ',
//     // markers: true
//   }
// })
// tl9.fromTo('.sixth-port' , {opacity: 0} , {opacity : 1})

// let tl10= gsap.timeline({
//   scrollTrigger: {
//     trigger :".seventh-port",
//     start: '-350%',
//     end: '100% ',
//     // markers: true
//   }
// })
// tl10.fromTo('.seventh-port' , {opacity: 0} , {opacity : 1})

// let tl11= gsap.timeline({
//   scrollTrigger: {
//     trigger :".eight-port",
//     start: '-380%',
//     end: '100% ',
//     // markers: true
//   }
// })
// tl11.fromTo('.eight-port' , {opacity: 0} , {opacity : 1})

// let tl12= gsap.timeline({
//   scrollTrigger: {
//     trigger :".nine-port",
//     start: '-400%',
//     end: '100% ',
//     // markers: true
//   }
// })
// tl12.fromTo('.nine-port' , {opacity: 0} , {opacity : 1})

// let tl13= gsap.timeline({
//   scrollTrigger: {
//     trigger :".contact",
//     start: '-150%',
//     end: '100% ',
//     markers: true
//   }
// })
// tl13.fromTo('.contact' , {opacity: 0} , {opacity : 1})

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
