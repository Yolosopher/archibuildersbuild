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