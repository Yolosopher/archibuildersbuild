const photogallery = document.querySelector('.photogallery')
const photogalleryX = document.querySelector('.photogallery__X')

const galleryImages = document.querySelectorAll('.gallerymain__imgcontainer img')


galleryImages.forEach((each, i) => {
    let index = i
    each.addEventListener('click', () => {
        photogallery.classList.add('opened')
        
        let modalWrapper = document.querySelector('.photogallery__wrapper')

        modalWrapper.innerHTML = ''
        galleryImages.forEach(img => {
            let imgdiv = document.createElement('div')
            imgdiv.classList.add('photogallery__slide')
            imgdiv.classList.add('swiper-slide')
            imgdiv.innerHTML = `
                <img src=${img.src} alt="">
            `
            modalWrapper.appendChild(imgdiv)
        })

        // after click
        homeGallerySwiper = new Swiper('.photogallery__swiper', {
            slidesPerView: 1.5,
            spaceBetween: 15,
            keyboard: true,
            centeredSlides: true,
            initialSlide: index,
            navigation: {
                nextEl: '.pagesmodal__navigation__next',
                prevEl: '.pagesmodal__navigation__prev'
            }
        })

    })
})

photogalleryX.addEventListener('click', () => {
    photogallery.classList.remove('opened')
})