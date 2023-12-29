const btn = document.querySelector('.scroll-to-top')
let root = document.documentElement

const handleScrollBar = () => {
	const scroll = window.scrollY

	const leftToScroll = document.body.getBoundingClientRect().height -
	window.innerHeight

	


	const ScrollBarWidth = Math.floor((scroll / leftToScroll) * 100)

	root.style.setProperty('--scroll-width', `${ScrollBarWidth}%`)

	if (ScrollBarWidth > 80) {
		btn.classList.add('active')
	} else {
		btn.classList.remove('active')
	}
}
console.log(`wysokość strony ${document.body.getBoundingClientRect().height}`)
console.log(`wysokosc viecport ${window.innerHeight}`);

const scrollToTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth',
	})
}

window.addEventListener('scroll', handleScrollBar)
btn.addEventListener('click', scrollToTop)
