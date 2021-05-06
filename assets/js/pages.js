let swp = new Swiper(".pagesmain__gallery__swiper", {
    slidesPerView: 1,
    speed: 1800,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    virtualTranslate: true,
    watchSlidesVisibility: true,
    navigation: {
        nextEl: ".pagesmain__gallery__navigationbtns__right",
        prevEl: ".pagesmain__gallery__navigationbtns__left",
    },
    pagination: {
        el: ".pagesmain__gallery__pagination",
        type: "fraction",
    },
    on: {
        slideChange: () => {
            // setTimeout(() => {
            //     swp.wrapperEl.style.transform = `translate3d(${swp.getTranslate()}px, 0px, 0px)`
            // }, 1400)
        },
        slideChangeTransitionStart: (bm) => {
            swp.el.classList.remove("fadein")

            setTimeout(() => {
                swp.el.classList.add("fadein")
            }, 1800)
        },
    },
})
let pagesmodal = document.querySelector('.pagesmodal')
const openGalleryModalBtn = document.querySelector('.pagesmain__gallery__nav__opengallerybtn')
const pagesmodal__X = document.querySelector('.pagesmodal__X')
let modalWrapper = document.querySelector('.pagesmodal__wrapper')

openGalleryModalBtn.addEventListener('click', () => {
    let slides = document.querySelectorAll('.pagesmain__gallery__slide')
    modalWrapper.innerHTML = ''
    slides.forEach(slide => {
        let bigimgSrc = slide.querySelector('.pagesmain__gallery__images__bigimg img').src
        let h2title = slide.querySelector('h2.title').innerText
        let textboxinnhtml = slide.querySelector('.pagesmain__bottomtextbox').innerHTML

        let newModalSlide = document.createElement('div')
        newModalSlide.classList.add('pagesmodal__slide')
        newModalSlide.classList.add('swiper-slide')
        newModalSlide.innerHTML = `
        <div class="pagesmodal__slide__imgbox"><img src="${bigimgSrc}" alt=""></div>
        <article class="pagesmain__gallery__article">
        <h2 class="title">${h2title}</h2>
        <div class="pagesmain__bottomtextbox">${textboxinnhtml}</div>
        </article>
        `
        modalWrapper.appendChild(newModalSlide)
    })
    pagesmodal.classList.add('opened')
    let swpmodal = new Swiper(".pagesmodal__swiper", {
        slidesPerView: 1,
        direction: "vertical",
        mousewheel: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".pagesmodal__navigation__next",
            prevEl: ".pagesmodal__navigation__prev",
        },
        breakpoints: {
            1025: {
                slidesPerView: "auto",
            },
        },
    })

})

pagesmodal__X.addEventListener('click', () => {
    pagesmodal.classList.remove('opened')
    modalWrapper.innerHTML = ''

})

