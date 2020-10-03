// Your code goes here
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

// 1. footer - mouse enter
const footer = document.querySelector('.footer > p');
footer.addEventListener('mouseenter', (e) => {
	e.target.style.backgroundColor = '#000';
	e.target.style.color = '#fff';
});

// 2. footer - mouse leave
footer.addEventListener('mouseleave', (e) => {
	e.target.style.backgroundColor = '#FFEBCD';
	e.target.style.color = '#000';
});

// 3. click - change color of buttons
const btns = document.querySelectorAll('.btn').forEach((item) => {
	item.addEventListener('click', (e) => {
		e.target.style.backgroundColor = 'green';
	});
});

// 4. dblclick - random color for header
const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];
const body = document.querySelector('body');

body.addEventListener('dblclick', (e) => {
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += hex[getRdm()];
	}

	e.target.style.backgroundColor = color;
});

function getRdm() {
	return Math.floor(Math.random() * hex.length);
}

// 5. wheel - logo will show you all the keys you press
const logo = document.querySelector('.logo-heading');

logo.addEventListener('wheel', (e) => {
	e.target.style.transform = 'scale(2)';
	e.target.style.transition = 'transform 1s';
});

// 6. scroll - imgages shake
const images = document.querySelectorAll('img').forEach((img) => {
	window.addEventListener('scroll', () => {
		console.log(img);
		img.style.transform += 'rotate(360deg)';
		img.style.transition = 'transform 0.1s';
	});
});

// 7. load - alert that the site has loaded
window.addEventListener('load', () => {
	alert(`The website has completed loaded`);
});

//8. auxclick - change body background

const div = document.querySelector('.home');
console.log(body);

div.addEventListener('mouseup', (e) => {
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += hex[getRdm()];
	}

	e.target.style.backgroundColor = color;
});

// 9. copy - copy something to get an alert

body.addEventListener('copy', () => {
	alert('You have copied some text!');
});

// 10. Offline

window.addEventListener('offline', () => {
	alert('The network connection has been lost.');
});

window.addEventListener('online', () => {
	alert('We are back online!');
});

// stop.Propagation on nav links, nav and header

const nav = document.querySelector('.nav');
const header = document.querySelector('header');
const links = document.querySelectorAll('.nav-link').forEach((item) => {
	item.addEventListener('click', (e) => {
		e.target.style.backgroundColor = 'darkblue';
		e.target.style.color = '#fff';
	});
});

nav.addEventListener('click', (e) => {
	nav.style.backgroundColor = 'orange';
	//stops propagation
	e.stopPropagation();
});

header.addEventListener('click', (e) => {
	header.style.backgroundColor = 'green';
});

// stretch - animatin text
let mySplitText = new SplitText('#quote');
