const returnYtImgUrl = (url) => {
    let utubecode = url.split('/watch?v=')[1]
    return `https://img.youtube.com/vi/${utubecode}/maxresdefault.jpg`
}
const returnYtEmbedUrl = (url) => {
    let utubecode = url.split('/watch?v=')[1]
    return `https://www.youtube.com/embed/${utubecode}`
}


const sections = document.querySelectorAll('.section')

const callbackFunction = (entries) => {
    if (entries[0].isIntersecting) {
        entries[0].target.classList.add('fadein')
    } else {
        entries[0].target.classList.remove('fadein')
    }
}

const observer = new IntersectionObserver(callbackFunction, {
    threshold: 0.3
})

sections.forEach(section => {
    observer.observe(section)
})
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
    },
  },
});

const paralaxbgs = document.getElementsByClassName("paralaxeff");
new simpleParallax(paralaxbgs);


const homevideo__video__img = document.querySelector('.homevideo__video__imgbox img')
const homevideo__video__link = document.querySelector('.homevideo__video__link')


const sec1videomodal = document.querySelector('.sec1videomodal')
const modalvideocontainer = document.getElementById('modalvideocontainer')
const modalClose = document.getElementById('modalClose')

window.addEventListener('DOMContentLoaded', () => {
    let link = homevideo__video__link.dataset.href
    let imgLink = returnYtImgUrl(link)
    homevideo__video__img.src = imgLink    

    homevideo__video__link.addEventListener('click', () => {
        const newIframe = document.createElement('iframe')
        newIframe.title = 'YouTube video player'
        newIframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
        newIframe.setAttribute('allowfullscreen', true)
        newIframe.setAttribute('frameborder', 0)
        newIframe.src = returnYtEmbedUrl(link)
        
        modalvideocontainer.appendChild(newIframe)
        
        sec1videomodal.classList.add('opened')
    })
    modalClose.addEventListener('click', () => {
        sec1videomodal.classList.remove('opened')
        modalvideocontainer.innerHTML = ''
    })
})
window.addEventListener('load', () => {
    [...document.getElementsByClassName('swiper-slide')].forEach(each => {
        each.classList.add('newtransdelay')
    })
})

// const sections = document.getElementsByClassName("section");
// new simpleParallax(paralaxbgs);


