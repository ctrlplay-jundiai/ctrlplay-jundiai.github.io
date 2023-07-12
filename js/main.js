const menu = document.querySelector('#menu-btn')
const nav = document.querySelector('header nav')

menu.addEventListener('click', () => {
	nav.classList.toggle('reveal')
})
