// setTimeout()
// setInterval()


// setTimeout()
// const tes = setTimeout(function() {
// 	console.log('Ok!')
// }, 5000)

// const tombol = document.getElementById('tombol')
// tombol.addEventListener('click', function() {
// 	clearTimeout(tes)
// 	console.log('selesai')
// })


// setInterval()
// const tes = setInterval(function() {
// 	console.log('Ok!')
// }, 2000)

// const tombol = document.getElementById('tombol')
// tombol.addEventListener('click', function() {
// 	clearInterval(tes)
// 	console.log('selesai')
// })




// program hitung mundur
const tanggalTujuan = new Date('Jun 20, 2020 16:00:00').getTime()

const hitungMundur = setInterval(function() {
	const sekarang = new Date().getTime()
	const selisih = tanggalTujuan - sekarang

	const hari = Math.floor(selisih / (1000 * 60 * 60 * 24))
	const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
	const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60))
	const detik = Math.floor(selisih % (1000 * 60) / 1000)

	const teks = document.getElementById('teks')
	teks.innerHTML = "Waktu Anda Tinggal : " + hari + " hari " + jam + " jam " + menit + " menit " + detik + " detik lagi!"

	if (selisih < 0) {
		clearInterval(hitungMundur)
		teks.innerHTML = "Waktu Anda HABIS!!!"
	}

}, 100)