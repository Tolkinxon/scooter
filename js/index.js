window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.menu-button')
    const header = document.querySelector('.header')

    button.addEventListener('click', () => {
        header.classList.toggle('open-menu')
    })
})