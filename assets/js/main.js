const langs = document.querySelectorAll('.lang')
const mobileHolder = document.querySelector('.mobile-holder')
const navigation = document.querySelector('.navigation')
const hamburger = document.querySelector('.hamburger')

if (document.querySelector('.innerPage')) {
    navigation.classList.add('darktheme')
}

langs.forEach(lang => {
    lang.addEventListener('click', () => {
        lang.classList.toggle('show')
    })
})
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    mobileHolder.classList.toggle('open')
    navigation.id === 'toFixed' ? navigation.id = '' : navigation.id = 'toFixed'
})

const paralaxbgs = document.getElementsByClassName("paralaxeff")
new simpleParallax(paralaxbgs, {
    scale: 1.25,
    delay: 2,
})
const sections = document.querySelectorAll(".observing")

const callbackFunction = (entries) => {
    if (entries[0].isIntersecting) {
        entries[0].target.classList.add("fadein")
    } else {
        entries[0].target.classList.remove("fadein")
    }
}


sections.forEach((section) => {
    const observer = new IntersectionObserver(callbackFunction, {
        // root: section.parentElement,
        // rootMargin: '0px',
        threshold: 0.01,
    })
    observer.observe(section)
})

window.addEventListener('load', () => {
    // if (document.querySelector('.innerPage')) {
    //     document.querySelectorAll('.fadeinx').forEach(each => {
    //         each.classList.add('fadein')
    //     })
    // }
})