const menu = document.querySelector('#menu-btn')
const nav = document.querySelector('header nav')
const homeLink = document.querySelector('#home-link')

menu.addEventListener('click', () => {
	nav.classList.toggle('reveal')
})

window.addEventListener('scroll', () => {
	let y = window.scrollY

	if (y < 180) {
		menu.classList.remove('reverse')
	} else {
		menu.classList.add('reverse')
	}
})

homeLink.addEventListener('click', () => {
	nav.classList.remove('reveal')
})
