const returnYtImgUrl = (url) => {
    let utubecode = url.split("/watch?v=")[1]
    return `https://img.youtube.com/vi/${utubecode}/maxresdefault.jpg`
}
const returnYtEmbedUrl = (url) => {
    let utubecode = url.split("/watch?v=")[1]
    return `https://www.youtube.com/embed/${utubecode}`
}


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
                swp.wrapperEl.style.transform = `translate3d(${swp.getTranslate()}px, 0px, 0px)`
            }, 1400)
        },
        slideChangeTransitionStart: (bm) => {
            swp.el.classList.remove("fadein")

            setTimeout(() => {
                swp.el.classList.add("fadein")
            }, 1800)
        },
    },
})




const homevideo__video__img = document.querySelector(
    ".homevideo__video__imgbox img"
)
const homevideo__video__link = document.querySelector(".homevideo__video__link")

const sec1videomodal = document.querySelector(".sec1videomodal")
const modalvideocontainer = document.getElementById("modalvideocontainer")
const modalClose = document.getElementById("modalClose")

window.addEventListener("DOMContentLoaded", () => {
    let link = homevideo__video__link.dataset.href
    let imgLink = returnYtImgUrl(link)
    homevideo__video__img.src = imgLink

    homevideo__video__link.addEventListener("click", () => {
        const newIframe = document.createElement("iframe")
        newIframe.title = "YouTube video player"
        newIframe.setAttribute(
            "allow",
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        )
        newIframe.setAttribute("allowfullscreen", true)
        newIframe.setAttribute("frameborder", 0)
        newIframe.src = returnYtEmbedUrl(link)

        modalvideocontainer.appendChild(newIframe)

        sec1videomodal.classList.add("opened")
    })
    modalClose.addEventListener("click", () => {
        sec1videomodal.classList.remove("opened")
        modalvideocontainer.innerHTML = ""
    })
})
window.addEventListener("load", () => {
    ;[...document.getElementsByClassName("header__swiper__wrapper__slide")].forEach((each) => {
        each.classList.add("newtransdelay")
    })
})

const galleryImages = document.querySelectorAll('.homegallery img')

const photogallery = document.querySelector('.photogallery')
const photogallerySwiperbox = document.querySelector('.photogallery__swiperbox')
let prevBtnForInserBef = document.querySelector('.photogallery__navigation__prev')
const photogalleryX = document.querySelector('.photogallery__X')

let homeGallerySwiper

galleryImages.forEach((img, index) => {
    
    img.addEventListener('click', () => {
        photogallery.classList.add('opened')
        document.querySelector('.photogallery__swiper') && document.querySelector('.photogallery__swiper').remove()
        // galleryopened slider
        let newSwiperContainer = document.createElement('div')
        newSwiperContainer.classList.add('photogallery__swiper')
        newSwiperContainer.classList.add('swiper-container')
        let wrapperhtml = `
        <div class="photogallery__swiper__wrapper swiper-wrapper">
        </div>
        `
        
        newSwiperContainer.innerHTML = wrapperhtml
        // galleryopened slider

        galleryImages.forEach((imgin, indinn )=> {
            let slidehtml = `
                <img src="${imgin.src}" alt="">
            `
            let newSld = document.createElement('div')
            newSld.classList.add('photogallery__swiper__wrapper__slide')
            newSld.classList.add('swiper-slide')
            newSld.innerHTML = slidehtml
            
            photogallerySwiperbox.insertBefore(newSwiperContainer, prevBtnForInserBef)
        
            let wrappa = photogallerySwiperbox.querySelector('.swiper-wrapper')
        
            wrappa.appendChild(newSld)
        })
        
        // after click
        homeGallerySwiper = new Swiper('.photogallery__swiper', {
            slidesPerView: 1.5,
            spaceBetween: 15,
            keyboard: true,
            centeredSlides: true,
            initialSlide: index,
            navigation: {
                nextEl: '.photogallery__navigation__next',
                prevEl: '.photogallery__navigation__prev'
            }
        })
        
        
    })
})
photogalleryX.addEventListener('click', () => {
    photogallery.classList.remove('opened')
})
// const sections = document.getElementsByClassName("section");
// new simpleParallax(paralaxbgs);
