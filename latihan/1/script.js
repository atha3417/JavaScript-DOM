const tUbahWarna = document.getElementById('tUbahWarna')
tUbahWarna.onclick = function() {
	// document.body.style.backgroundColor = 'lightblue'
	// document.body.setAttribute('class', 'ubah-warna')
	document.body.classList.toggle('biru-muda')
}

const tRandomWarna = document.createElement('button')
const teksTombol = document.createTextNode('Random Warna')
tRandomWarna.appendChild(teksTombol)
tRandomWarna.setAttribute('type', 'button')
tRandomWarna.style.marginLeft = "10px"
tUbahWarna.after(tRandomWarna)

tRandomWarna.addEventListener('click', function() {
	let red = Math.round(Math.random() * 255) + 0;
	let green = Math.ceil(Math.random() * 255) + 0;
	let blue = Math.floor(Math.random() * 255) + 0;
	document.body.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")"
})






const sMerah = document.querySelector('input[name=sMerah]')
const sHijau = document.querySelector('input[name=sHijau]')
const sBiru = document.querySelector('input[name=sBiru]')

sMerah.addEventListener('input', function() {
	let red = sMerah.value
	let green = sHijau.value
	let blue = sBiru.value
	document.body.style.backgroundColor = "rgb("+red+","+green+","+blue+")"
})

sHijau.addEventListener('input', function() {
	let red = sMerah.value
	let green = sHijau.value
	let blue = sBiru.value
	document.body.style.backgroundColor = "rgb("+red+","+green+","+blue+")"
})

sBiru.addEventListener('input', function() {
	let red = sMerah.value
	let green = sHijau.value
	let blue = sBiru.value
	document.body.style.backgroundColor = "rgb("+red+","+green+","+blue+")"
})



document.body.addEventListener('mousemove', function(event) {
	// posisi mouse
	// console.log(event.clientX)
	// console.log(event.clientY)
	// ukuran browser
	// console.log(window.innerWidth)
	
	const xPos = Math.round((event.clientX / window.innerWidth) * 255)
	const yPos = Math.floor((event.clientY / window.innerHeight) * 255)
	const zPos = Math.ceil((xPos * yPos) % 255)
	document.body.style.backgroundColor = "rgb("+xPos+", "+yPos+", "+zPos+")"
})

