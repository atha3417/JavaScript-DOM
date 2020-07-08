// // DOM Selection

// document.getElementById() -> element
// const judul = document.getElementById('judul')
// judul.style.color= 'red';
// judul.style.backgroundColor= '#ccc';
// judul.innerHTML= 'Atha Tsaqif';

// document.getElementsByTagName() -> HTMLCollection
// const p = document.getElementsByTagName('p')
// for(let i = 0; i < p.length; i++) {
// 	p[i].style.backgroundColor= 'lightblue'
// }

// const h1 = document.getElementsByTagName('h1')[0]
// h1.style.fontSize = '50px'

// document.getElementByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName('p1')
// p1[0].innerHTML = 'Ini diubah Dari JavaScript'

// document.querySelector() -> element
// const p5 = document.querySelector('#b p');
// p5.style.color = 'lightgreen'
// p5.style.fontSize = '30px'

// const li2 = document.querySelector('section#b ul li:nth-child(2)')
// li2.style.backgroundColor = "orange"

// const p6 = document.querySelector('p')
// paragraf.innerHTML = "Ini diubah Melalui JavaScript"

// document.querySelectorAll() -> nodeList
// const p6 = document.querySelectorAll('p')
// var nilaiAwal = 1
// while(nilaiAwal <= p6.length) {
// 	p[nilaiAwal].style.backgroundColor = "blue"
// nilaiAwal++
// }

// mengubah node root
// const sectionB = document.getElementById('b')
// const p4 = sectionB.querySelector('p')
// p4.style.backgroundColor = "salmon"

// mengubah node root v2 
const sectionB = document.querySelector('section#b')
const p4 = sectionB.getElementsByTagName('p')[0]
p4.style.backgroundColor = "salmon"