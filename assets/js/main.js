const langs = document.querySelectorAll('.lang')
const mobileHolder = document.querySelector('.mobile-holder')
const navigation = document.querySelector('.navigation')
const hamburger = document.querySelector('.hamburger')


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

const observer = new IntersectionObserver(callbackFunction, {
    threshold: 0.3,
})

sections.forEach((section) => {
    observer.observe(section)
})