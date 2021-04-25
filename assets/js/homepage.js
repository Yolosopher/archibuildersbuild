// const sections = document.querySelectorAll('.section')

// const callbackFunction = (entries) => {
//     if (entries[0].isIntersecting) {
//         entries[0].target.classList.add('observed')
//     } else {
//         entries[0].target.classList.remove('observed')
//     }
// }

// const observer = new IntersectionObserver(callbackFunction, {
//     threshold: 0.6
// })

// sections.forEach(section => {
//     observer.observe(section)
// })
let swp = new Swiper(".header__swiper", {
  slidesPerView: 1,
  speed: 1800,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  virtualTranslate: true,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".swiper-buton-next",
    prevEl: ".swiper-buton-prev",
  },
  on: {
    slideChange: () => {
      setTimeout(() => {
        swp.wrapperEl.style.transform = `translate3d(${swp.getTranslate()}px, 0px, 0px)`;
      }, 1400);
    },
    slideChangeTransitionStart: (bm) => {
      swp.el.classList.remove('fadein')
      
      setTimeout(() => {
          swp.el.classList.add('fadein')
      }, 1800);
      //   swp.

      // activeImages.classList.add('fadein')
      // setTimeout(() => {
      //     activeSlide.style.zIndex = ''
      //     activeImages.classList.remove('fade-in')
      // }, 1200);
      // setTimeout(() => {
      //     console.log('transitionEnd')
      //     activeSlide.style.zIndex = ''
      //     let newActiveSlide = document.querySelectorAll('.header__swiper__wrapper__slide')[swp.activeIndex]
      //     newActiveSlide.style.zIndex = 10
      //     newActiveSlide.querySelector('.header__swiper__wrapper__slide__images').classList.remove('fadein')
      // }, 1200);
      // activeSlideImages.classList.add('fadein')
      // console.log('added')
      // setTimeout(() => {
      //   activeSlideImages.classList.remove('fadein')
      //   console.log('removed')
      // }, 600);
    },
  },
});

const paralaxbgs = document.getElementsByClassName("paralaxeff");

new simpleParallax(paralaxbgs);
window.addEventListener('load', () => {
    [...document.getElementsByClassName('swiper-slide')].forEach(each => {
        each.classList.add('newtransdelay')
    })
})