const thumbs = document.querySelector('.container')
const jumbo = document.querySelector('.jumbo')
const thumb2 = document.querySelectorAll('.thumb')

thumbs.addEventListener('click', function(e) {
	// cek apakah yang diklik adalah thumb
	if (e.target.className == 'thumb') {
		jumbo.src = e.target.src
		jumbo.classList.add('fade')
		setTimeout(function() {
			jumbo.classList.remove('fade')
		}, 1000)

		thumb2.forEach(function(thumb) {
		// if (thumb.classList.contains('active')) {
			// thumb.classList.remove('active')
	 	// }
			thumb.className = 'thumb'
		})

		e.target.classList.add('active')
	}
})